const User = require('../api/user/userModel')
const _ = require('lodash')
const logger = require('./logger')
const Plant = require('../api/plant/plantModel')

logger.log('Seeding Database')

const users = [
    {
        username: "testing123", 
        password: "testing123", 
        email: "email@email.com", 
        firstName: "Archer",
        lastName: "Sterling",
    }
]

const plants = [
    {
        plantName: "Harry",
        plantType: "ZZ",
        waterDate: Date.now(),
        daysTilWater: 1,
        feedDate: Date.now(),
        daysTilFeed: 45
    },
    {
        plantName: "John",
        plantType: "Lily",
        waterDate: Date.now(),
        daysTilWater: 2,
        feedDate: Date.now(),
        daysTilFeed: 60

    },
    {
        plantName: "David",
        plantType: "Ivy",
        waterDate: Date.now(),
        daysTilWater: 5,
        feedDate: Date.now(),
        daysTilFeed: 30  
    }
]

const createDoc = function(model, doc) {
    return new Promise(function(resolve, reject){
        const dbModel = new model
        _.assign(dbModel, doc)
        dbModel.save(function(err, saved){
            return err ? reject(err) : resolve(saved)
        })
    })
}

const cleanDB = function() {
    logger.log('Cleaning DB')
    const cleanPromises = [User, Plant]
        .map(function(model) {
            return model.remove().exec()
        })
        return Promise.all(cleanPromises)
}

const createUsers = function(data) {
    //create a promise that creats a doc for each user
    const promises = users.map(function(user){
        return createDoc(User, user)
    })
    //when all users docs are created merge the users
    //to the user database and pass it to the next
    //step in the promise
    return Promise.all(promises)
        .then(function(users){
            return _.merge({users: users}, data || {})
        })
}

var createPlants = function(data) {
    //create a promise that creats a doc for each user
    
    const promises = plants.map(function(plant){
        plant.owner = data.users[0]._id
        return createDoc(Plant, plant)
    })
    Promise.all(promises)
        .then(function(plant){
            return _.merge({plants: plants}, data || {})
        })
    return 'DB Seeded'
}

cleanDB()
    .then(createUsers)
    .then(createPlants)
    .then(logger.log.bind(logger))
    .catch(logger.log.bind(logger))