const express = require('express');

const router = express.Router();

router.get('/', function(req,res){
    res.redirect('/users');
});

router.get('/users', function(req,res){
    res.render('users-list');
})

module.exports = router;