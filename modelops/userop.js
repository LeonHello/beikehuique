var User = require('../models/index').User;

// 向 user 表中插入数据
exports.createUser = function(sessionid, modify_time) {
    return User.create({
        sessionid: sessionid,
        modify_time: modify_time,
    });
};
 
// 通过 sessionid 查找用户 并 展示
exports.findUser = function(sessionid) {
    return User.findOne({
        where: {
          sessionid: sessionid
        }
      });
};

//根据 sessionid 获取用户主键id
exports.findUserID = function(sessionid) {

    return User.findOne({
        where: {
          sessionid: sessionid
        }
    });
    
};


// 更新 user 表中数据 => 用户完善资料
exports.updateUser = function(sessionid, username, phone, address, fund_applicant_detail, activity_volunteer_detail, modify_time){
    return User.update({
        username: username,
        phone: phone,
        address: address,
        fund_applicant_detail: fund_applicant_detail,
        activity_volunteer_detail: activity_volunteer_detail,
        modify_time: modify_time,
    }, {
        where: {
            sessionid: sessionid
        }
    });
};