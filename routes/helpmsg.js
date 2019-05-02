var express = require('express');
var router = express.Router();

var Help = require('../models/index').Help;

// 查看帮助与反馈 问题与答案 url => /helpmsg
router.get('/', function(req, res, next) {
  
  Help.findAll()
  .then(function(help){
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(JSON.stringify(help));
  })
  .catch(next);

});

module.exports = router;
