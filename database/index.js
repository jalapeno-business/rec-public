const mongoose = require('mongoose');
mongoose.connect('mongodb://student:student12345!@ds251362.mlab.com:51362/jalapeno-business-recommendations');
var scripts = require('../data/script');
var seededData = require('../data/seeded_data.json');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

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
                console.log("could not save data in db", err);
            } 
        });
    });
}

getDataToDatabase(seededData);
// let getDataToDatabase = function(saveThis) {
//     let currentRest = new Restaurant(restaurant)
//     currentRest.forEach(rest => {
//       rest.save((err, rest) => {
//         if (err) {
//             console.log("could not save data in db", err);
//         } 
//       });
//     });
// }
// restaurants.forEach(restaurant => {
//     const tempRest = new Restaurant(restaurant)
//     tempRest.validate(err => {
//         if (err) {
//             //wejifowjeoifw
//         }
//     } else {
//         temprest.save
// })

// module.exports = {
//     getDataToDatabase: getDataToDatabaseow 
// };