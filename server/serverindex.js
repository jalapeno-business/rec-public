const express = require('express');

const app = express();
const db = require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.get('/api/:id/recommendations', (req, res) => {
  db.getDataFromDatabase(req.params.id, (err, result) => {
    console.log(req.params.id);
    if (err) {
      console.log('error in getting data from db in server', err);
    } else {
      console.log('success in getting data from db', result);
      res.send(result).end();
    }
  });
});

const PORT = 3004;
app.listen(PORT, () => console.log('Port is listening on', PORT));
