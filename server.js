const express = require('express');

const gifInfoRouter = require('./config/gifInfo.router.js');

const app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/html/index.html`);
});

app.use('/gifInfo', gifInfoRouter);

app.listen(port, () => console.log('example app listening at port number: ', port));