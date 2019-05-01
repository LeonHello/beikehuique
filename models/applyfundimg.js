module.exports = function (sequelize, DataTypes) {
	return sequelize.define('applyfundimg', {
		id:{ type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
        img: { type: DataTypes.STRING, allowNull: false, comment:'图片位置信息'},
        user: {type: DataTypes.BIGINT, allowNull: false, comment: '用户外键'}
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'applyfundimg',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
