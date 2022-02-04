import express from 'express';

const app = express();

const PORT = 4000;
app.listen(process.env.PORT || PORT);