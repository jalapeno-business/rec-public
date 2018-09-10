var faker = require('faker');
var fs = require('fs');
var path = require('path');

var publicationData = function(num) {
    let data = []
    for (let i = 0; i < num; i++) {
        data.push(
            {
                img: faker.image.nightlife(), 
                title: faker.lorem.words(), 
                url: faker.image.imageUrl(), 
                // date: faker.date.between()
            });
        }
        return data; 
    }
    
    var whatToOrderData = function(num) {
        let data = [];
        for (let i = 0; i < num; i++) {
            data.push(
                {
                    title: faker.lorem.words(), 
                    img: faker.image.food()
                }
            )
        }
        return data; 
    }
    
    var photoData = function(num) {
        let data = [];
        for (let i = 0 ; i < num; i++) {
            data.push(
                {
                    name: faker.image.food(),
                    sm: faker.image.food(),
                    med: faker.image.food(),
                    lg: faker.image.food(),
                }            
            )
        }
        return data; 
    }

    let createRestaurants = function(id) {
        return {
            id: id,
            publicationsList: publicationData(faker.random.number({min: 1, max: 15})), 
            whatToOrderList: whatToOrderData(faker.random.number(3)),
            photos: photoData(faker.random.number(10))
        }
    }
    
    
    var restaurants = [];
    for (let i = 1; i <= 100; i++) {
        let restaurant = createRestaurants(i);
        restaurants.push(restaurant)
    } 
    
    console.log(restaurants);
    
    var jsoned = JSON.stringify(restaurants, null, 2);
    fs.writeFileSync(path.join(__dirname, 'seeded_data.json'), jsoned, 'utf8');