const express = require('express');
const path = require('path');
// const compression = require('compression');

const port = process.env.port || 3000;
const app = express();

// app.use(compression()); 
app.use(express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* eslint-disable no-console */

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});