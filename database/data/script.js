const faker = require('faker');
const fs = require('fs');
const path = require('path');

const publicationData = (num) => {
  const data = [];
  for (let i = 0; i < num; i += 1) {
    const randomPhotoNumber = Math.floor(Math.random() * 59);
    data.push({
      img: `https://s3-us-west-1.amazonaws.com/zagatphotos/image-${randomPhotoNumber}.jpg`,
      title: faker.lorem.words(),
      // url: 'https://storage.googleapis.com/zagat-top-places/2014-12-san-francisco/27_4505_burger.jpg?max-w=305&auto=format',
    });
  }
  return data;
};

const whatToOrderData = (num) => {
  const data = [];
  for (let i = 0; i < num; i += 1) {
    const randomPhotoNumber = Math.floor(Math.random() * 59);
    data.push({
      title: faker.lorem.words(),
      img: `https://s3-us-west-1.amazonaws.com/zagatphotos/image-${randomPhotoNumber}.jpg`,
    });
  }
  return data;
};

const knownForIcons = (num) => {
  const possibleKnownFor = [
    { title: 'Celebrity Chef', icon: 'https://s3.amazonaws.com/zagaticons/celebrity-chef.svg' },
    { title: 'Groups', icon: 'https://s3.amazonaws.com/zagaticons/groups.svg' },
    { title: 'Quick Bite', icon: 'https://s3.amazonaws.com/zagaticons/kids.svg' },
    { title: 'Lunch', icon: 'https://s3.amazonaws.com/zagaticons/lunch.svg' },
    { title: 'Outdoor Seating', icon: 'https://s3.amazonaws.com/zagaticons/outdoor-seating.svg' },
    { title: 'Food', icon: 'https://s3.amazonaws.com/zagaticons/placeholder.svg' },
    { title: 'Takeout', icon: 'https://s3.amazonaws.com/zagaticons/private-rooms.svg' },
    { title: 'Private Rooms', icon: 'https://s3.amazonaws.com/zagaticons/quick-bite.svg' },
    { title: 'Takeout', icon: 'https://s3.amazonaws.com/zagaticons/takeout.svg' },
    // { tite: 'Parking', icon: 'car' },
    // { title: 'Birthdays', icon: 'birthday-cake' },
    // { title: 'Vegetarian', icon: 'leaf' },
    // { title: 'Alcohol', icon: 'glass-martini' },
    // { title: 'Drinks', icon: 'beer' },
    // { title: 'Music', icon: 'headphones-alt' },
    // { title: 'Pets', icon: 'paw' },
    // { title: 'Dining', icon: 'utensils' },
    // { title: 'Dessert', icon: 'cookie-bite' },
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
// faker.random.number({ min: 0, max: 3 })
const createRestaurants = id => ({
  id,
  restaurant: faker.name.firstName(),
  insiderTip: faker.lorem.paragraph(),
  publicationsList: publicationData(faker.random.number({ min: 1, max: 15 })),
  whatToOrderList: whatToOrderData(faker.random.number({ min: 0, max: 3 })),
  knownForIcons: knownForIcons(Math.floor(Math.random() * Math.floor(9))),
});

const restaurants = [];
for (let i = 1; i <= 100; i += 1) {
  const restaurant = createRestaurants(i);
  restaurants.push(restaurant);
}

const jsoned = JSON.stringify(restaurants, null, 2);
fs.writeFileSync(path.join(__dirname, 'seeded_data.json'), jsoned, 'utf8');
