/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');
var supertest = require('supertest-as-promised')(require('../../src/app.js'))


const agent = session(app);
const dog = {
  name: 'Pug',
  height: 10,
  weight: 10
};

describe('Breed routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.err('Unable to connect to database:', err);
      beforeEach(() => Breed.sync({ force: true })
        .then(() => Breed.create(dog)));

      describe('GET/dogs', () => {
        it('should get 200', () =>
          agent.get('/dogs').expect(200)
        );
      })
    })
  )
})

describe('Routes', function () {
  describe('/dogs?name=', function () {
    it('GET ?name=name should return the details', function () {
      return supertest
        .get('/dogs?name=Bulldog')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          expect(res.body[0].name).to.be.equal('Bulldog');
        })
    })
  })
})

describe('Routes', function () {
  describe('/dogs/:id', function () {
    it('GET /dogs/:id should return detail', function () {
      return supertest
        .get('/dogs/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          expect(res.body.name).to.be.equal('Bulldog');
        })
    })
  })
})