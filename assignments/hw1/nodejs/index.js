// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

const express = require('express');
const app = express();
const port = 3000;

const crypto = require('crypto');

app.use(express.json());

app.post('/nodejs/sha256', (req, res) => {
  const hash = crypto.createHash('sha256');
  var num1 = req.body.Num1;
  var num2 = req.body.Num2;
  if(!Number.isInteger(num1) || !Number.isInteger(num2)){
    console.log('invalid input...')
    res.statusCode = 400;
    res.json({
      'Result' : 'Error- Invalid Input',
      'HasError' : true
    });
    return;
  }
  var sum = num1 + num2;
  console.log(`sum: ${sum}`);
  var encryptedSum = hash.update(sum.toString()).digest('hex');
  console.log(`sum to encrypted by sha256: ${encryptedSum}`);
  res.statusCode = 200;
  res.json({
    'Result' : encryptedSum,
    'HasError' : false
  })  
});

app.get('/nodejs/write', (req, res) => {
  res.statusCode = 200;
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})