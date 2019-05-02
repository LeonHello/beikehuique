var express = require('express');
var router = express.Router();

var Huique = require('../models/index').Huique;
var Author = require('../models/index').Author;

// 灰雀信息 url => /aboutus/huiquemsg
router.get('/huiquemsg', function(req, res, next) {
  
  Huique.findAll()
  .then(function(help){
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(JSON.stringify(help));
  })
  .catch(next);

});

// 作者信息 url => /aboutus/authormsg
router.get('/authormsg', function(req, res, next) {
  
    Author.findAll()
    .then(function(help){
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.send(JSON.stringify(help));
    })
    .catch(next);
  
  });

module.exports = router;
