package main

// ResultType is the type of server responses
type ResultType struct {
	Result   string `json:"result"`
	HasError bool   `json:"hasError"`
}

// ShaRequestType is the type of the body of POST requests for sha256
type ShaRequestType struct {
	Num1 string `json:"num1"`
	Num2 string `json:"num2"`
}
