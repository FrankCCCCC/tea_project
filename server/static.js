const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));

const server = app.listen(5000)
console.log("Static Server Listen on Port: 5000");