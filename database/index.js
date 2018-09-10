const mongoose = require('mongoose');
mongoose.connect('mongodb://student:student12345!@ds251362.mlab.com:51362/jalapeno-business-recommendations');
// var scripts = require('../data/script');
var seededData = require('../data/seeded_data.json');
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     // we're connected!
// });

var restaurantSchema = new mongoose.Schema({
    id: Number,
    publicationsList: Array,
    whatToOrderList: Array, 
    photos: Array
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

let getDataToDatabase = function(seededData) {
    seededData.forEach(rest => {
        let currentRest = new Restaurant({
            id: rest.id,
            publicationsList: rest.publicationsList,
            whatToOrderList: rest.whatToOrderList, 
            photos: rest.photos
        });
        currentRest.save((err, rest) => {
            if (err) {
                // console.log("could not save data in db", err);
            } 
        });
    });
}

let getDataFromDatabase = (id, getData) => {
 restaurants.findById({id: id} , function(err, arrOfObj) {
     if (err) {
       console.log("error in gettingdatafromdb", err);
       getData(err, null);
   } else {
    console.log("get req success");
       getData(null, arrOfObj);
   }

 })
}

// getDataToDatabase(seededData);


// module.exports = {
//     getDataToDatabase: getDataToDatabaseow 
// };