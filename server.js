const express = require('express')
const path = require('path')

const app = express();
const port = 8000;


app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/about.html'));
})


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/contactpage', function (req, res) {
    res.sendFile(path.join(__dirname, '/contactpage.html'));
});


app.listen(port, () => {
    console.log("connected")
})