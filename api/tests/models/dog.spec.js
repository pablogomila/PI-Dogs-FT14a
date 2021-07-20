const { Breed, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Breed model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Error connecting to database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Breed.sync({ force: true }));
    describe('name', () => {
      it('name couldnt be null', (done) => {
        Breed.create({})
          .then(() => done(new Error('name cannot be null')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Breed.create({ name: 'Test' });
      });
      it('weight should be integer', (done) => {
        Breed.create({
          name: 'Bulldog',
          height: 10.5,
          weight: 'String',
        })
          .then(() => done(new Error('can not be String')))
          .catch(() => done());
      })
    });
  });
});
