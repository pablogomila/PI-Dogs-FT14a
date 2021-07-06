const {Temper} = require('../db')
const axios = require('axios')
const { API_KEY } = process.env


function getAllTemper (req, res, next) {
    const tempersApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const tempersDb = Temper.findAll()
    Promise.all([tempersApi, tempersDb]) 
    .then((response) => {
        let [resTempersApi, resTempersDb] = response
        return res.send(resTempersDb.concat(resTempersApi.data))
    })
    .catch((err) => next(err))
}

module.exports = {
    getAllTemper,
}