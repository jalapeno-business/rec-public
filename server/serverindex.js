const express = require('express');
const cors = require('cors');

const app = express();
const db = require('../database/index.js');

app.use(cors());

app.use('/:id', express.static(`${__dirname}/../client/dist`));
app.get('/api/restaurant/recommendations/:id', (req, res) => {
  db.getDataFromDatabase(req.params.id, (err, result) => {
    if (err) {
      console.log('error in getting data from db in server', err);
      res.status(400);
    } else {
      console.log('success in getting data from db', result);
      res.send(result).end();
    }
  });
});

const PORT = 3004;
app.listen(PORT, () => console.log('Port is listening on', PORT));
