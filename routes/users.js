const express = require('express');

const router = express.Router();

router.get('/', function(req,res){
    res.redirect('/users');
});

router.get('/users', function(req,res){
    res.render('users-list');
});

router.get('/create-users', function(req,res){
    res.render('create-users');
});

module.exports = router;