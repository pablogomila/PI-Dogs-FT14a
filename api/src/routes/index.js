const { Router } = require('express');
const { Breed, Temperament } = require('../db')
const { Op } = require('sequelize');

const router = Router();

router.get('/dogs', function (req, res, next) {
    const { name } = req.query;
    try {
        //! Trying to get breed by name (if provided by query) including temperament
        if (name) {
            Breed.findAll({
                include: [Temperament],
                where: {name: {[Op.iLike]: `${name}`}}})
            .then(resp => {
                resp.length ? res.send(resp) : res.send({message:'Breed not found'})
            })} 
        //! If name is not provided send all breeds
        else {
            Breed.findAll({include: [Temperament]})
            .then(resp => {resp.length ? res.send(resp) : res.send({ message: 'Could not get breeds' })})}
    } catch (err) {
        next(err)}
})

router.post('/dogs', function (req, res, next) {
    const { name, height, weight, life_span, temperament } = req.body;
    //! Creating Breed in post with body details
    try {
        Breed.create({name, height, weight, life_span,
            image: 'https://i.imgur.com/vFDQcYj.jpeg'})
            .then(breed => breed.setTemperaments(temperament))
            .then(res.send({ message: 'Created.!' }))
    } catch (err) {
        next(err.message);
    }
});

router.get('/dogs/:id', function (req, res, next) {
    var { id } = req.params;
    //! Getting Breed if provided in params
    try {
        Breed.findByPk(id, {include: Temperament})
        .then(resp => {resp ? 
            res.send(resp) : res.send({ message: `Could not get breed with id: ${id}` })})
    } catch (err) {
        next(err)}
});

router.get('/temperaments', function (_req, res, next) {
    //! Getting all temperaments from DB
    try {
        Temperament.findAll({ order: [['name', 'asc']] })
        .then(resp => {
            resp.length ? res.send(resp) : res.send({message:'Could not get temperaments'})
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;