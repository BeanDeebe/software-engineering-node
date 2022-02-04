const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/a1-db');
app.get('/hello', (req, res) =>
  res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);
