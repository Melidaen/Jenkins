const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.send("Welcome to Express Demo! Something new!")
}) 

app.get('/error', (req, res) => {
    process.exit(1);
})

app.get('/filip', (req, res) => {
    res.send("Hello world!");
})
app.listen(3000);

