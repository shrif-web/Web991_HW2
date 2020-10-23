## Go API
Package main consists of two _GO_ files:
   - **structs.go** that contains requests and responses types
   - **main.go** that contains the main program and includes these endpoints:
      - /sha256:
         - _accepts_ two numbers (In a POST request body)
         - _returns_ SHA256 coding of the sum of the two numbers, or an error if the numbers aren't numbers =)
      - /write
         - _accepts_ a line number between 1 and 100 (In a GET request url params)
         - _returns_ the according line in text.txt file
### Http Request samples
Two samples for appropriate http requests can be found in sampleRequests.http