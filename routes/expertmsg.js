var express = require('express');
var router = express.Router();

var Expert = require('../models/index').Expert;

// 查看所有科室信息 url => /sectionmsg
router.get('/', function(req, res, next) {
  
    var section = ['脊柱外科', '儿科', '普外科', '神经外科','神经介入科', 
    '功能神经外科', '心外科', '心脏介入科', '心血管内科', '病理科'];
    res.send(JSON.stringify(section));

});

// 查看某科室下的专家信息 url => /sectionmsg/expert
router.get('/expert', function(req, res, next) {

    var section = req.query.section;

    Expert.findAll({
        where: {
            section: section,
        }
    }).then(expert => {
        res.send(JSON.stringify(expert));
    }).catch(next);

})

module.exports = router;
