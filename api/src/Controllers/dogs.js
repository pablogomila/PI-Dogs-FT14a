const {Dog} = require('../db')
const axios = require('axios')
const { API_KEY } = process.env
const {v4: uuidv4 } = require('uuid')

function getAllDogs (req, res, next) {
    const dogsApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const dogsDb = Dog.findAll()
    Promise.all([dogsApi, dogsDb]) 
    .then((response) => {
        let [resDogsApi, resDogsDb] = response
        return res.send(resDogsDb.concat(resDogsApi.data))
    })
    .catch((err) => next(err))
}

function addDog(req, res, next) {
    const id = uuidv4()
    const dog = {...req.body, id}
    if(!dog) return res.send(null)
    return Dog.create(dog)
    .then((dogs) => {res.send(dogs)})
    .catch((err) => next(err))
}


module.exports = {
    getAllDogs,
    addDog,
}