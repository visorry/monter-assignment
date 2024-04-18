const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    otp: String,
    validated: Boolean,
    location: String,
    age: Number,
    workDetails: String
});

module.exports = mongoose.model('User', userSchema);
