const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://beebed:<Patriots2020!>@cluster0.onmpj.mongodb.net/Tuiter?retryWrites=true&w=majority')


const PORT = 4000;
app.listen(PORT);
