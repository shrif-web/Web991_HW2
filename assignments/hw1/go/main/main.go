package main

import (
        "crypto/sha256"
        "encoding/json"
        "fmt"
        "io/ioutil"
        "log"
        "net/http"
        "runtime"
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
                result.Result = "Error- Invalid Input"
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
                result.Result = "Error- Missing Param"
                result.HasError = true
        } else { // request is fine
                num, err := strconv.Atoi(keys[0])
                if err != nil || num > 100 || num < 1 {
                        result.Result = "Error- Invalid Input"
                        result.HasError = true
                } else { // 1 <= lineNumber <= 100
                        result.Result = readLine(num)
                        result.HasError = false
                }
        }

        json.NewEncoder(w).Encode(result)
}

func readLine(num int) string {
        content, _ := ioutil.ReadFile(fileName)
        lines := strings.Split(fmt.Sprintf("%s", content), lineSeparator)
        return lines[num-1]
}
func handleRequests() {
        fmt.Printf("server running on localhost%s\n", port)
        http.HandleFunc("/sha256", shaFunc) // TODO method ?
        http.HandleFunc("/write", writeFunc)
        log.Fatal(http.ListenAndServe(port, nil))
}

const port = ":8080"
const fileName = ".//text.txt" // use absolute path in server before build

var lineSeparator = "\n"

func main() {
        if runtime.GOOS == "windows" {
                lineSeparator = "\r\n"
        }
        handleRequests()
}

