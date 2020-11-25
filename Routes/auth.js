const express = require('express');
const router = express.Router();

router.get('/login',(req, res)=>{
    res.send('I am Login')
});

router.get('/register',(req, res)=>{
    res.send('I am register')
});

module.exports = router;