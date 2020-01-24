var express = require('express')
var app = express()
app.get('/', (req, res) => {
        res.send("Hello World From GCP")
})
app.listen(9000, () => {
        console.log("Hello World GCP is listening on port 9000")
})