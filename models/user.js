const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    login: String,
    name: String,
    password: String
});

const User = mongoose.model("User", categorySchema);




module.exports = User;