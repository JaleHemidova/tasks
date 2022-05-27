const express = require('express');
const app = express();
const employees = [
    [0, "John", 25],
    [1, "Jack", 26],
    [2, "Jane", 24]
];

app.get('/', function (req, res) {
    res.send(employees);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});