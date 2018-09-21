const faker = require('faker');
const fs = require('fs');
const path = require('path');

const publicationData = (num) => {
  const data = [];
  for (let i = 0; i < num; i += 1) {
    data.push({
      img: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format',
      title: faker.lorem.words(),
      url: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format',
    });
  }
  return data;
};

const whatToOrderData = (num) => {
  const data = [];
  for (let i = 0; i < num; i += 1) {
    data.push({
      title: faker.lorem.words(),
      img: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format',
    });
  }
  return data;
};

const knownForIcons = (num) => {
  const possibleKnownFor = [
    { tite: 'Parking', icon: 'car' },
    { title: 'Birthdays', icon: 'birthday-cake' },
    { title: 'Vegetarian', icon: 'leaf' },
    { title: 'Alcohol', icon: 'glass-martini' },
    { title: 'Drinks', icon: 'beer' },
    { title: 'Music', icon: 'headphones-alt' },
    { title: 'Pets', icon: 'paw' },
    { title: 'Dining', icon: 'utensils' },
    { title: 'Dessert', icon: 'cookie-bite' },
  ];
  const using = [];
  for (let i = 0; i < num; i += 1) {
    const item = possibleKnownFor[Math.floor(Math.random() * Math.floor(possibleKnownFor.length))];
    if (!using.includes(item)) {
      using.push(item);
    }
  }
  return using;
};

const createRestaurants = id => ({
  id,
  restaurant: faker.name.firstName(),
  insiderTip: faker.lorem.paragraph(),
  publicationsList: publicationData(faker.random.number({ min: 1, max: 15 })),
  whatToOrderList: whatToOrderData(faker.random.number(3)),
  knownForIcons: knownForIcons(Math.floor(Math.random() * Math.floor(7))),
});

const restaurants = [];
for (let i = 1; i <= 100; i += 1) {
  const restaurant = createRestaurants(i);
  restaurants.push(restaurant);
}

const jsoned = JSON.stringify(restaurants, null, 2);
fs.writeFileSync(path.join(__dirname, 'seeded_data.json'), jsoned, 'utf8');
