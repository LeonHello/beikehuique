var express = require('express');
var router = express.Router();

var User = require('../modelops/userop');

// url => /usermsg           
router.get('/', function(req, res, next) {
  let sessionid = req.query.sessionid; 
  // sessionid = 123456;
  User.findUser(sessionid).then(function(user){
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(JSON.stringify(user));
  }).catch(next);
});


//url => /usermsg/updatemsg
router.get('/updatemsg', function(req, res, next) {
  let sessionid = req.query.sessionid;
  let username = req.query.username;
  let phone = req.query.phone;
  let address = req.query.address;
  let fund_applicant_detail = req.query.fund_applicant_detail;
  let activity_volunteer_detail = req.query.activity_volunteer_detail;
  let modify_time = new Date().toLocaleString();

  //更新该用户的相关信息
  User.updateUser(sessionid, username, phone, address, fund_applicant_detail, activity_volunteer_detail, modify_time)
  .then(function(){
    res.end(JSON.stringify({status:'100',msg:'更新成功'}));
  }).catch(next);

})

module.exports = router;
