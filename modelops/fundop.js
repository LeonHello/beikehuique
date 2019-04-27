var Fund = require('../models/index').Fund;
var FundType = require('../models/index').FundType;
var UsertoFund = require('../models/index').UsertoFund;

//查询所有 FundType 并返回相关信息
exports.findFundType = function() {
    return FundType.findAll();
};

//查询某种类的所有 Fund 并返回相关信息
exports.findFund = function(fundtype_id) {
    return Fund.findAll({
        where: {
            fundtype: fundtype_id,
        }
    });
};

//查询 fundtypename 对应的 基金主键id
exports.findFundTypeID = function(typename){
    return FundType.findOne({
        where: {
            name: typename,
        }
    });
};



//向 usertofund 表中 插入一条数据

//查询 fundid 对应的 活动主键id
exports.findFundID = function(fundid){
    return Fund.findOne({
        where: {
            fundid: fundid,
        }
    });
};
//收藏基金 //user_id fund_id 均为外键
exports.storeFund = function(user_id, fund_id, modify_time) {
    return UsertoFund.create({
        user_id: user_id,
        fund_id: fund_id,
        modify_time: modify_time,
    });
};

//找到某条收藏的基金的某条记录
exports.findUsertoFund = function(user_id, fund_id) {
    return UsertoFund.findOne({
        where: {
            user_id: user_id,
            fund_id: fund_id,
        } 
    });
}

//查找已收藏的基金的主键id
exports.findStoredFund = function(user_id) {
    return UsertoFund.findAll({
        where: {
            user_id: user_id,
        }
    });
}

exports.findFundByID = function(fund_id) {
    return Fund.findOne({
        where: {
            id: fund_id,
        }
    })
}
