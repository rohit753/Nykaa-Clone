const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://rohit:123456a@cluster0.clhww.mongodb.net/nykaa")
}