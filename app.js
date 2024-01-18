const express = require('express');
const fs = require('fs/promises');
const SIGN_UP_SCHEMA = require('./validations/signUpSchema');
const UserController = require('./controlles/User.controller');
const {validationUser} = require('./middleware/validateUser');


const bodyParser = express.json();
const app = express();




app.get('/', (req, res) => {
    return fs.readFile('./staticView/index.html', 'utf-8')
    .then(data => {
        res.status(200).send(data)
    })
})

app.post('/users', bodyParser, validationUser, UserController.createUser);

app.get('/users', UserController.getUsers);

app.get('/users/:userId', UserController.getOneUser);

app.delete('/users/:userId', UserController.deleteOne);

app.put('/users/:userId', bodyParser, UserController.updateOneUser)

module.exports = app;
