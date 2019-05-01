module.exports = function (sequelize, DataTypes) {
	return sequelize.define('author', {
		id:{ type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		authorid:{ type: DataTypes.STRING, allowNull: false, unique: true, comment:'作者编号id'},
		name: { type: DataTypes.STRING, allowNull: false, comment:'作者姓名' },
		wxnumber: { type: DataTypes.STRING, comment:'作者微信号' },
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'author',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
