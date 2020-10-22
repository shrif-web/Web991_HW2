package main

import (
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
)

func shaFunc(w http.ResponseWriter, r *http.Request) {
	// Handling Cors
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var shaRequest ShaRequestType

	reqBody, _ := ioutil.ReadAll(r.Body)
	json.Unmarshal(reqBody, &shaRequest)

	num1, err1 := strconv.Atoi(shaRequest.Num1)
	num2, err2 := strconv.Atoi(shaRequest.Num2)

	var result ResultType

	if err1 != nil || err2 != nil {
		result.Result = "Error"
		result.HasError = true
	} else {
		sumSha := sha256.Sum256([]byte(strconv.Itoa(num1 + num2)))
		result.Result = fmt.Sprintf("%x", sumSha)
		result.HasError = false
	}

	json.NewEncoder(w).Encode(result)
}

func writeFunc(w http.ResponseWriter, r *http.Request) {
	// Handling Cors
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var result ResultType

	keys, ok := r.URL.Query()["lineNumber"]
	if !ok || len(keys[0]) < 1 {
		fmt.Println("Url Param 'lineNumber' is missing")
		result.Result = "Error"
		result.HasError = true
	} else {
		num, err := strconv.Atoi(keys[0])
		println(num)
		if err != nil || num > 100 {
			result.Result = "Error"
			result.HasError = true
		} else {
			result.Result = readLine(num)
			result.HasError = false
		}
	}

	json.NewEncoder(w).Encode(result)
}

func readLine(num int) string {
	content, _ := ioutil.ReadFile("./main/text.txt")
	lines := strings.Split(fmt.Sprintf("%s", content), "\r\n") // In linux is '\n' i guess
	return lines[num-1]
}

func main() {
	http.HandleFunc("/go/sha256", shaFunc) // TODO method ?
	http.HandleFunc("/go/write", writeFunc)
	http.ListenAndServe(":8080", nil)
}

// ResultType is ... (to avoid lint error)
type ResultType struct {
	Result   string `json:"result"`
	HasError bool   `json:"hasError"`
}

// ShaRequestType is ...
type ShaRequestType struct {
	Num1 string `json:"num1"`
	Num2 string `json:"num2"`
}

//myRouter := mux.NewRouter().StrictSlash(true)
//myRouter.HandleFunc("/go/sha256", shaFunc).Methods("POST")
//myRouter.HandleFunc("/go/write", writeFunc).Methods("GET")
