module.exports = function (sequelize, DataTypes) {
	return sequelize.define('User', {
		id:{ type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		sessionid: { type: DataTypes.STRING, allowNull: false, unique: true, comment:'sessionid作为用户密码' },
		username: { type: DataTypes.STRING, comment:'真实姓名/用户名' },
		phone: {
			type: DataTypes.STRING, 
			valide:{
				isNumeric: true,
				len: [11, 11],
			}, 
			comment:'电话'
		},
		address: {type: DataTypes.STRING, comment:'所在省市'},
		fund_applicant_detail: {type: DataTypes.TEXT, comment:'基金申请人详情'},
		activity_volunteer_detail: {type: DataTypes.TEXT, comment:'活动志愿者详情'},
		modify_time: {type: DataTypes.DATE, comment:'最后修改时间'},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'user',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
