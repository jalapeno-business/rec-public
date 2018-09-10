const express = require('express');
const app = express();
let db = require('../database/index');

app.get('/recommendations', (req, res) => 
    res.send("hello world!")
);

var PORT = 3004;
app.listen(PORT, () => console.log("Port is listening on", PORT)
);