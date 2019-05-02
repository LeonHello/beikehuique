var express = require('express');
var router = express.Router();

var Activity = require('../modelops/activityop');
var User = require('../modelops/userop');

// 查看所有活动信息 url => /activitymsg
router.get('/', function(req, res, next) {
  
  var p1 = Activity.updateActivityStatus1();
  var p2 = Activity.updateActivityStatus2();
  var p3 = Activity.findActivity();
  Promise.all([p1, p2, p3]).then(function(activity){
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(JSON.stringify(activity[2]));
  }).catch(next);

});

// 报名活动 url => /activitymsg/joinactivity
router.get('/joinactivity', function(req, res, next) {
  let sessionid = req.query.sessionid;
  let activityid = req.query.activityid;
  let modify_time = new Date().toLocaleString();

  //获取相应主键id的promise对象
  var p1 = User.findUserID(sessionid);
  var p2 = Activity.findActivityID(activityid);

  Promise.all([p1, p2]).then(p => {
    if(p[0].id>0 && p[1].id>0)  Activity.joinActivity(p[0].id, p[1].id, modify_time)
  }).then(res.end(JSON.stringify({status:'100',msg:'报名活动成功'}))).catch(next);

})

// 取消报名活动 url => /activitymsg/cancelactivity
router.get('/cancelactivity', function(req, res, next) {
  let sessionid = req.query.sessionid;
  let activityid = req.query.activityid;

  //获取相应主键id的promise对象
  var p1 = User.findUserID(sessionid);
  var p2 = Activity.findActivityID(activityid);

  Promise.all([p1, p2]).then(p => {
    if(p[0].id>0 && p[1].id>0)  
      Activity.findUsertoActivity(p[0].id, p[1].id)
      .then(res => res.destroy());
  }).then(res.end(JSON.stringify({status:'100',msg:'取消报名成功'}))).catch(next);

})

//获取与user关联的所有活动信息   url => /activitymsg/joinedactivity
router.get('/joinedactivity', function(req, res, next) {
  let sessionid = req.query.sessionid;

  //1、查找该用户的主键user_id
  User.findUserID(sessionid)
  .then(user => {
    //2、查找usertoactivity表中对应的该用户user_id的所有活动的主键
    Activity.findJoinedActivity(user.id)
    .then(usertoactivity => {
      var num = usertoactivity.length;
      var user_to_activity_promise_arr = [];
      for(var i = 0; i < num; i++){
        //promise arr
        //3、通过活动主键查找这些主键对应的活动信息的promise对象 是一个对象数组
        user_to_activity_promise_arr[i] = Activity.findActivityByID(usertoactivity[i].activity_id);
      }
      //4、Promise.all()方法等所有异步操作执行完成后获得该用户的对应的活动信息的对象数组返回
      Promise.all(user_to_activity_promise_arr).then(activity_arr =>{
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.send(JSON.stringify(activity_arr));
      }).catch(next);
    })
  })

})

module.exports = router;
