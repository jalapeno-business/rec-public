const express = require('express');
const cors = require('cors');

const app = express();
const db = require('../database/index.js');

app.use(cors());

app.use(express.static(`${__dirname}/../client/dist`));
// app.use((req) => {
//   console.log('path', req.path);
// });
app.get('/api/restaurant/recommendations/:id', (req, res) => {
  console.log("params is here", req.params.id);
  db.getRestaurantRecommendation(req.params.id, (err, result) => {
    // console.log("hello", req.params.id);
    if (err) {
      console.log('error in getting data from db in server', err);
      res.status(400);
    } else {
      res.send(result);
    }
  });
});

const PORT = 3004;
app.listen(PORT, () => console.log('Port is listening on', PORT));
