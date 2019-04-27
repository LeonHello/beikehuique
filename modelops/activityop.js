var Activity = require('../models/index').Activity;
var UsertoActivity = require('../models/index').UsertoActivity;

//查询所有 Activity 并返回相关信息
exports.findActivity = function(){
    return Activity.findAll();
};

//查询 activityid 对应的 活动主键id
exports.findActivityID = function(activityid){
    return Activity.findOne({
        where: {
            activityid: activityid,
        }
    });
};

//向 usertoactivity 表中 插入一条数据
//参加活动 
//user_id activity_id 均为外键
exports.joinActivity = function(user_id, activity_id, modify_time) {
    return UsertoActivity.create({
        user_id: user_id,
        activity_id: activity_id,
        modify_time: modify_time,
    });
};
//取消活动 报名 找到已报名的某条记录
exports.findUsertoActivity = function(user_id, activity_id) {
    return UsertoActivity.findOne({
        where: {
            user_id: user_id,
            activity_id: activity_id,
        } 
    });
}

//查找已报名活动的主键id
exports.findJoinedActivity = function(user_id) {
    return UsertoActivity.findAll({
        where: {
            user_id: user_id,
        }
    });
}

exports.findActivityByID = function(activity_id) {
    return Activity.findOne({
        where: {
            id: activity_id,
        }
    });
}

//更新活动状态
exports.updateActivityStatus1 = function() {

    var present_time = new Date().toLocaleString();

    return Activity.update({
        status: '进行中',
    },{
        where: {
            status: '报名中',
            deadline: {
                lt: present_time
            }
        }
    })

}

exports.updateActivityStatus2 = function() {

    var present_time = new Date().toLocaleString();

    return Activity.update({
        status: '已结束',
    },{
        where: {
            status: '进行中',
            endtime: {
                lt: present_time
            }
        }
    })
    
}