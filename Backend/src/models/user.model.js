const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    profile_img: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: 'customer'},
    address_id: {type: mongoose.Schema.Types.ObjectId , ref: 'address', required: false, default: null},
    order_id: {type: mongoose.Schema.Types.ObjectId , ref: 'order', required: false, default: null},
    cart_id: {type: mongoose.Schema.Types.ObjectId , ref: 'cart', required: false, default: null},
},
{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('user', userSchema);