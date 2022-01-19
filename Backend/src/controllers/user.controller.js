const express= require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/',async (req, res) => {
    try{
        res.send("hello");
    } catch(err){
        res.send(err.message);
    }
})

module.exports = router;