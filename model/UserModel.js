const mongoose = require('mongoose');

const register = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
});

const User_register = mongoose.model('user', register);

module.exports =  User_register;