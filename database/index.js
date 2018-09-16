const mongoose = require('mongoose');
mongoose.connect('mongodb://student:student12345!@ds251362.mlab.com:51362/jalapeno-business-recommendations');
// var scripts = require('../data/script');
var seededData = require('../data/seeded_data.json');

var restaurantSchema = new mongoose.Schema({
  _id: Number,
  restaurant: String,
  insiderTip: String,
  publicationsList: Array,
  whatToOrderList: Array, 
  photos: Array
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

let getDataToDatabase = function() {
  seededData.forEach(rest => {
    let currentRest = new Restaurant({
      _id: rest.id,
      restaurant: rest.restaurant,
      insiderTip: rest.insiderTip,
      publicationsList: rest.publicationsList,
      whatToOrderList: rest.whatToOrderList, 
      photos: rest.photos
    }, {unique: true});
    currentRest.save((err, rest) => {
      if (err) {
        console.log('could not save data in db', err);
      } else {
        // console.log("successfully saved data", rest);
      }
    });
  });
};

let getDataFromDatabase = (id, getData) => {
  Restaurant.find({_id: id}, function(err, arrOfObj) {
    if (err) {
      console.log('error in gettingdatafromdb', err);
      getData(err, null);
    } else {
      console.log('get req success');
      getData(null, arrOfObj);
    }
  });
};

getDataToDatabase();
module.exports = {
  getDataFromDatabase: getDataFromDatabase
};