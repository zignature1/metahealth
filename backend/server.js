const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const update = require('./controllers/update');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'postgres'
  }
});
db.select('*').from('users');

const app = express();
app.use(bodyParser.json());
app.use(cors())

/*app.get('/', (req, res) => { res.send(database.users);})*/
app.get('/', (req, res) => { res.redirect('http://localhost:3001')})
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt)}) /*Inject dependency(db, bcrypt) functions to signin.js*/
app.post ('/register', (req, res) => { register.handleRegister(req, res,db, bcrypt)}) /*Inject dependency(db, bcrypt) functions to register.js*/
app.get ('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/update', (req, res) => { update.handleUpdatePut(req, res, db)})

app.listen(3000, () => {
  console.log('App is running on port 3000')
})


/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user profile
/update --> POST

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
*/
