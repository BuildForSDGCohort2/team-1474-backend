import app, {server} from '../../../index';
const request = require('supertest');


const userData= {
    "email": "murhula@gmail.com",
    "phone": "243990445626",
    "name": "lemoisson",
    "lastname":"metre", 
    "password":"12345678@@", 
    "confirmPassword":"12345678@@"
};

describe('initial test',() => {
  afterAll(async (done) => {
    await server.close();
    done()
  })
     it('should signup successfylly', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send(userData)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
     })
     it('should return 403 status if email exists', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, phone: '0999965444'})
      .expect(403)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
     })
     it('should return 403 status if phone exists', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, email: 'joel@gmail.com'})
      .expect(403)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
     })
     it('password should be different and return 400 status', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, password: 'lemoisson'})
      .expect(400)
      .end(function(err, res) {
        expect(res.body.data.[0].key).toEqual('password');
        if (err) return done(err);
        done();
      });
     })
     it('password should be different and return 400 status', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, password: 'lemoisson'})
      .expect(400)
      .end(function(err, res) {
        expect(res.body.data.[0].key).toEqual('password');
        if (err) return done(err);
        done();
      });
     })
     it('return 400 status when email is not valid', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, email: 'lemoissonmetregmal'})
      .expect(400)
      .end(function(err, res) {
        expect(res.body.data.[0].key).toEqual('email');
        if (err) return done(err);
        done();
      });
     })
     it('return 400 status when phone is not valid', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, phone: 'lemoissonmetregmal'})
      .expect(400)
      .end(function(err, res) {
        expect(res.body.data.[0].key).toEqual('phone');
        if (err) return done(err);
        done();
      });
     })
     it('return 400 status when name is not valid', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, name: undefined})
      .expect(400)
      .end(function(err, res) {
        expect(res.body.data.[0].key).toEqual('name');
        if (err) return done(err);
        done();
      });
     })
     it('return 400 status when name is not valid', (done)=>{
      request(server)
      .post('/api/v1/users/signup')
      .send({...userData, lastname: undefined})
      .expect(400)
      .end(function(err, res) {
        expect(res.body.data.[0].key).toEqual('lastname');
        if (err) return done(err);
        done();
      });
     })
})