const fs = require('fs')
const express = require('express');
const app = express();
const port = 3000;

const crypto = require('crypto');

app.use(express.json());

// todo: remove /nodejs
app.post('/sha256', (req, res) => {
  const hash = crypto.createHash('sha256');
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(`${num1} ${num2}`)
  if(!Number.isInteger(num1) || !Number.isInteger(num2)){
    console.log('invalid input...')
    res.statusCode = 400;
    res.json({
      'result' : 'Error- Invalid Input',
      'hasError' : true
    });
    return;
  }
  var sum = num1 + num2;
  console.log(`sum: ${sum}`);
  var encryptedSum = hash.update(sum.toString()).digest('hex');
  console.log(`sum to encrypted by sha256: ${encryptedSum}`);
  res.statusCode = 200;
  res.json({
    'result' : encryptedSum,
    'hasError' : false
  });
});

// todo: remove /nodejs
app.get('/write', (req, res) => {
  var lineNumber=req.query.lineNumber;
  if(lineNumber === undefined){
    console.log('Error- Missing Param');
    res.statusCode = 400;
    res.json({
      'result' : 'Error- Missing Param',
      'hasError' : true
    });
    return;
  }
  if(lineNumber<1 || lineNumber>100){
    console.log('Error- Invalid Input');
    res.statusCode = 400;
    res.json({
      'result' : 'Error- Invalid Input',
      'hasError' : true
    });
    return;
  }
  console.log(`lineNumber: ${lineNumber}`);
  fs.readFile('./text.txt', 'ascii', function (err,data) {
      if (err) {
      console.log(err);
      return;
    }
    var splittedData=data.split('\n');
    var readLine=splittedData[lineNumber-1];
    console.log(`read line: ${readLine}`);
    res.statusCode = 200;
    res.json({
      'result' : readLine,
      'hasError' : false
    });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});