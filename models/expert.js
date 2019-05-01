module.exports = function (sequelize, DataTypes) {
	return sequelize.define('expert', {
		id:{type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey : true, unique : true, comment:'自增型主键id'},
		name: {type: DataTypes.STRING, allowNull: false, comment:'专家姓名' },
        major: {type: DataTypes.STRING, allowNull: false, comment: '专业擅长'},
        corporation: {type: DataTypes.STRING, allowNull: false, comment: '供职单位'},
        section: {type: DataTypes.STRING, allowNull: false, comment:'科室'},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'expert',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
