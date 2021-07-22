const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Breed, Temperament } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  let temp = new Set();
  //! IMPORTING TEMPERAMENTS FROM API AND SAVING TO DB
  axios.get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data)
    .then(json => {
      json && json.forEach(breed => {
        let temps = breed.temperament && breed.temperament.split(', ');
        temps && temps.forEach(t => temp.add(t));
      })
      let arrayTemp = Array.from(temp)
      Temperament.bulkCreate(arrayTemp.map(t => ({ name: t })))
    })
    .then(console.log('Temperaments (re)imported to DB'))
    .catch(err => console.error(err));

  //! IMPORTING BREEDS FROM API AND SAVING TO DB
  axios.get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data)
    .then(json => {
      json.forEach(breed => {
        Breed.create({
          name: breed.name || 'Could not import name',
          weight: breed.weight.metric || 'Could not import weight',
          height: breed.height.metric || 'Could not import height',
          life_span: breed.life_span || 'Could not import life span',
          image: breed.image.url || 'Could not import image',
        })
        .then(bree => {
          let breedTemp = breed.temperament && breed.temperament.split(', ');
          breedTemp?.forEach(breetem => {
            Temperament.findOne({
              where: {name: breetem}
              })
              .then(tem => {bree.addTemperament(tem?.dataValues.id)})
          })
        })
      })
    })
    .then(console.log('Breeds (re)imported to DB'))
    .catch(err => console.error(err));
})

//! LOGGING SERVER RUNNING
server.listen(3001, () => {
  console.log('Backend server running at port :3001');
});
