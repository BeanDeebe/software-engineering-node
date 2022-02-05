const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://beebed:<Patriots2020!>@cluster0.onmpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


const PORT = 4000;
app.listen(PORT);
