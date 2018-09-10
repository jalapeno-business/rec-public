const express = require('express');
const app = express();
let db = require('../database/index');

// var getRestaurant = (req, res) => {
//   let { id } = req.params;
//   selectRestaurant(id, (err, rest))
// }


// var selectRestaurant = (req, callback) => {


// }

app.get('/recommendations/:id', (req, res) => {
   db.getDataFromDatabase(req.params.id, function(err, res) {
       if (err) {
           console.log("error in getting data from db in server", err);
       } else {
           console.log("success");
           res.send("hello world!").end();
       }
   });
 });

var PORT = 3004;
app.listen(PORT, () => console.log("Port is listening on", PORT)
);