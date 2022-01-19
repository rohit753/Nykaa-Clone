const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    profile_img: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: 'customer'}
},
{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('user', userSchema);