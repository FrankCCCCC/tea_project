const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(5000)
console.log("Static Server Listen on Port: 5000");