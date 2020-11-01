# Nodejs readme 
## APIs
This program will support two different APIs:
- The first one is *sha256* which works with http **POST** method. The program will read two numbers from the Json body of post request, calculate their sum, and then returns the answer encrypted by *sha256*.
- The second api is *write* which works with http **GET** method. Our program will read a number called **lineNumber**, from the url which must be from 1 to 100 and then returns the specified line from a text file. You can see the text file here [./text.tex](https://github.com/parhamsaremi/WebFall2020/blob/master/assignments/hw1/nodejs/text.txt).
## Build and Run
First run `yarn install` in your terminal, in current directory, to install the packages which are needed to run the nodejs file. After this command, **node_modules** folder should be created.
Now run `node index.js` to run index.js. This is the file which will handle *sha256* and *write* APIs for nodejs.
## Request samples
Some samples for both of APIs can be found in here [./sampleRequests.http](https://github.com/parhamsaremi/WebFall2020/blob/master/assignments/hw1/nodejs/sampleRequests.http)
