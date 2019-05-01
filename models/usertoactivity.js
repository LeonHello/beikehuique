module.exports = function (sequelize, DataTypes) {
    return sequelize.define('usertoactivity', {
		id:{ type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		user_id:{ type: DataTypes.BIGINT, allowNull: false, comment:'用户id'},
		activity_id: { type: DataTypes.BIGINT, allowNull: false, comment:'活动id'},
		modify_time: {type: DataTypes.DATE, comment:'添加时间'},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'usertoactivity',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}