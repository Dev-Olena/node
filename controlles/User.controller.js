const User = require('../models/User');

module.exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    const user = newUser.addUser();
    res.status(201).send(user)
}

module.exports.getUsers = async (req, res) => {
    const users = User.findAll();
    res.status(200).send(users);
}

module.exports.getOneUser = async(req, res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    if(user)  {
        return res.status(200).send(user);
    } 
    res.status(404).send('There is no such user');
    
}

module.exports.deleteOne = async(req, res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    if(user) {
        const result = user.deleteUser();
        return res.status(200).send(result)
    }
    res.status(404).send('There is no such user');
}

module.exports.updateOneUser = async (req, res) => {
    const {body, params: {userId}} = req;
    const result = User.updateOne(Number(userId), body);
    res.status(200).send(result);
}