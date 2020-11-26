const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');

router.get('/login',(req, res)=>{
  
    res.send('I am Login')
});

router.post('/register',(req, res)=>{
     const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedUser = user.save();
        res.json({user: user._id});
       }
       catch(err){
        res.send(err);
       }
      
    res.send('I am registed')
});

module.exports = router;