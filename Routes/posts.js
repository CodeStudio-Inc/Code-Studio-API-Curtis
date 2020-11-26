const express = require('express');
const router = express.Router();
const Post = require('../Models/postsModel')

router.get('/posts',(req, res)=>{
    res.send('I am posts')
});

router.post('/post',(req, res)=>{
    const post = new Post
    res.send('I am posts')
});
module.exports = router;