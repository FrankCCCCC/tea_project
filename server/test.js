const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet')

app.use(cors());
app.use(helmet())
app.get('/', (req, res) =>{
    res.send('Hello World!');
})

let port = 5000

const server = app.listen(port, ()=>{
    console.log(`Static Server Listen on Port: ${port}`);
})