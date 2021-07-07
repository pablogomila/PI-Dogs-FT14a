const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Breed, Temperament } = require('./src/db.js');

conn.sync({ force: true }).then(() => {

  // Temperaments
  let temp = new Set();
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
    .then(console.log('Temperaments imported to DB'))
    .catch(err => console.error(err));

  // Breeds
  axios.get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data)
    .then(async json => {
      json && json.forEach(breed => {
        Breed.create({
          name: breed.name || 'Could not import name',
          weight: breed.weight.metric || 'Could not import weight',
          height: breed.height.metric || 'Could not import height',
          life_span: breed.life_span || 'Could not import life span',
          image: breed.image.url || 'https://www.seekpng.com/png/detail/360-3605845_dog-holding-paper-in-mouth.png',
        })
          .then(b => {
            let breedTemp = breed.temperament && breed.temperament.split(', ');
            breedTemp?.forEach(bt => {
              Temperament.findOne({
                where: {
                  name: bt
                }
              })
                .then(t => {
                  b.addTemperament(t?.dataValues.id)
                })
            })
          })
      })
    })
    .then(console.log('Breeds imported to DB'))
    .catch(err => console.error(err));
})

server.listen(process.env.PORT || 3001, () => {
  console.log('Server running at port :3001');
});
