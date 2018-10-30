const mongoose = require('mongoose');

mongoose.connect('mongodb://student:student12345!@ds251362.mlab.com:51362/jalapeno-business-recommendations');
const seededData = require('./data/seeded_data.json');

const restaurantSchema = new mongoose.Schema({
  _id: Number,
  restaurant: String,
  insiderTip: String,
  publicationsList: Array,
  whatToOrderList: Array,
  knownForIcons: Array,
  photos: Array,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const seedRecommendationData = () => {
  seededData.forEach((rest) => {
    const currentRest = new Restaurant({
      _id: rest.id,
      restaurant: rest.restaurant,
      insiderTip: rest.insiderTip,
      publicationsList: rest.publicationsList,
      whatToOrderList: rest.whatToOrderList,
      knownForIcons: rest.knownForIcons,
      photos: rest.photos,
    }, { unique: true });
    currentRest.save((err, rest) => {
      if (err) {
        console.log('could not save data in db');
      }
    });
  });
};

const getRestaurantRecommendation = (id, getData) => {
  Restaurant.find({ _id: id }, (err, arrOfObj) => {
    if (err) {
      console.log('error in gettingdatafromdb');
      getData(err, null);
    } else {
      getData(null, arrOfObj);
    }
  });
};

// seedRecommendationData();
module.exports = {
  getRestaurantRecommendation,
};
