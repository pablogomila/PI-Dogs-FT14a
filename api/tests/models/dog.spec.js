const { Dog, conn } = require('../../src/db.js');
const app = require('../../index');
const session = require('supertest-session');
const agent = session(app);

xdescribe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  xdescribe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('name cant be null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when temperament is not provided', () => {
        Temperament.create({});
      });
    });
  });
});


