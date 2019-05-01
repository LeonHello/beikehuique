var sequelize = require('./_db').sequelize();

var Fund = sequelize.import('./fund.js');
var FundType = sequelize.import('./fundtype.js');
var ApplyFundImg = sequelize.import('./applyfundimg.js')
var Activity = sequelize.import('./activity.js');
var User = sequelize.import('./user.js');
var UsertoFund = sequelize.import('./usertofund.js');
var UsertoActivity = sequelize.import('./usertoactivity.js');
var Help = sequelize.import('./help.js');
var Huique = sequelize.import('./huique.js');
var Author = sequelize.import('./author.js');
var Expert = sequelize.import('./expert.js');

FundType.hasMany(Fund, {foreignKey: 'fundtype', targetKey: 'id'});

User.hasMany(ApplyFundImg, {foreignKey: 'user'})

User.belongsToMany(Fund, {through: UsertoFund, foreignKey: 'user_id'});
Fund.belongsToMany(User, {through: UsertoFund, foreignKey: 'fund_id'});

User.belongsToMany(Activity, {through: UsertoActivity, foreignKey: 'user_id'});
Activity.belongsToMany(User, {through: UsertoActivity, foreignKey: 'activity_id'});

// 同步模型到数据库中
sequelize.sync({ alter: true });

exports.Fund = Fund;
exports.FundType = FundType;
exports.ApplyFundImg = ApplyFundImg;
exports.Activity = Activity;
exports.User = User;
exports.UsertoFund = UsertoFund;
exports.UsertoActivity = UsertoActivity;
exports.Huique = Huique;
exports.Help = Help;
exports.Author = Author;
exports.Expert = Expert;
