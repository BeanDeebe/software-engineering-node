const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://beebed:<Patriots2020!>@cluster0.onmpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
app.get('/hello', (req, res) =>
  res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);
