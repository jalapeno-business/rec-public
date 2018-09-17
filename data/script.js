var faker = require('faker');
var fs = require('fs');
var path = require('path');

var publicationData = function(num) {
  let data = [];
  for (let i = 0; i < num; i++) {
    data.push(
      {
        img: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format', 
        title: faker.lorem.words(), 
        url: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format'
      });
  }
  return data; 
};
    
var whatToOrderData = function(num) {
  let data = [];
  for (let i = 0; i < num; i++) {
    data.push(
      {
        title: faker.lorem.words(), 
        img: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format'
      }
    );
  }
  return data; 
};
    
var knownForIcons = function(num) {
  var possibleKnownFors = [
    {tite: 'Parking', icon: 'car'},
    {title: 'Birthdays', icon: 'birthday-cake'},
    {title: 'Vegetarian', icon: 'leaf'},
    {title: 'Alcohol', icon: 'glass-martini'},
    {title: 'Drinks', icon: 'beer'},
    {title: 'Music', icon: 'headphones-alt'},
    {title: 'Pets', icon: 'paw'},
    {title: 'Dining', icon: 'utensils'},
    {title: 'Dessert', icon: 'cookie-bite'},
  ];
  var using = [];
  for (let i = 0; i < num; i++) {
    let item = possibleKnownFors[Math.floor(Math.random() * Math.floor(possibleKnownFors.length))];
    if (!using.includes(item)) {
      using.push(item);
    }
  }
  return using;
};

let createRestaurants = function(id) {
  return {
    id: id,
    restaurant: faker.name.firstName(),
    insiderTip: faker.lorem.paragraph(),
    publicationsList: publicationData(faker.random.number({min: 1, max: 15})), 
    whatToOrderList: whatToOrderData(faker.random.number(3)),
    knownForIcons: knownForIcons(Math.floor(Math.random() * Math.floor(7))),
  };
};
    
var restaurants = [];
for (let i = 1; i <= 100; i++) {
  let restaurant = createRestaurants(i);
  restaurants.push(restaurant);
} 
    
var jsoned = JSON.stringify(restaurants, null, 2);
fs.writeFileSync(path.join(__dirname, 'seeded_data.json'), jsoned, 'utf8');