const express = require('express');
const app = express();
let db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.get('/recommendations/:id', (req, res) => {
  db.getDataFromDatabase(req.params.id, function(err, result) {
    console.log(req.params.id);
    if (err) {
      console.log('error in getting data from db in server', err);
    } else {
      console.log('success in getting data from db', result);
      res.send(result).end();
    }
  });
});

var PORT = 3004;
app.listen(PORT, () => console.log('Port is listening on', PORT));