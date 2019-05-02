var express = require('express');
var router = express.Router();

var Fund = require('../modelops/fundop');
var User = require('../modelops/userop');

// 查看所有基金信息 url => /fundtypemsg
router.get('/', function(req, res, next) {
  
  //返回所有基金相关信息
  Fund.findFundType().then(function(fundtype){
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(JSON.stringify(fundtype));
  }).catch(next);

});

// 查看某种类的基金信息 url => /fundtypemsg/fundmsg
router.get('/fundmsg', function(req, res, next) {
  let typename = req.query.name;//种类名

  //返回该种类所有基金相关信息
  Fund.findFundTypeID(typename)
  .then(fundtype => {
    Fund.findFund(fundtype.id)
    .then(fund => {
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.send(JSON.stringify(fund));
    }).catch(next);
  });

});

// 收藏基金 url => /fundtypemsg/fundmsg/storefund
router.get('/fundmsg/storefund', function(req, res, next) {
  let sessionid = req.query.sessionid;
  let fundid = req.query.fundid;
  let modify_time = new Date().toLocaleString();

  //获取相应主键id的promise对象
  var p1 = User.findUserID(sessionid);
  var p2 = Fund.findFundID(fundid);

  Promise.all([p1, p2]).then(p => {
    if(p[0].id>0 && p[1].id>0)  Fund.storeFund(p[0].id, p[1].id, modify_time)
  }).then(res.end(JSON.stringify({status:'100',msg:'收藏基金成功'}))).catch(next);
})

// 取消收藏基金 url => /fundtypemsg/fundmsg/cancelfund
router.get('/fundmsg/cancelfund', function(req, res, next) {
  let sessionid = req.query.sessionid;
  let fundid = req.query.fundid;

  //获取相应主键id的promise对象
  var p1 = User.findUserID(sessionid);
  var p2 = Fund.findFundID(fundid);

  Promise.all([p1, p2]).then(p => {
    if(p[0].id>0 && p[1].id>0)  
      Fund.findUsertoFund(p[0].id, p[1].id).then(res => res.destroy());
  }).then(res.end(JSON.stringify({status:'100',msg:'取消收藏基金成功'}))).catch(next);

})

//获取与user关联的所有基金信息的信息  url => /fundtypemsg/fundmsg/storedfund
router.get('/fundmsg/storedfund', function(req, res, next) {
  let sessionid = req.query.sessionid;

  User.findUserID(sessionid)
  .then(user => {
    Fund.findStoredFund(user.id)
    .then(usertofund => {
      var num = usertofund.length;
      var user_to_fund_promise_arr = [];
      for(var i = 0; i < num; i++){
        user_to_fund_promise_arr[i] = Fund.findFundByID(usertofund[i].fund_id);//still promise
      }
      Promise.all(user_to_fund_promise_arr)
      .then(fund_arr => {
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.send(JSON.stringify(fund_arr));
      }).catch(next);
    })
  })
})

module.exports = router;
