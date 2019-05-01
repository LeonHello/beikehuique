module.exports = function (sequelize, DataTypes) {
	return sequelize.define('help', {
		id: { type: DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		helpid: { type: DataTypes.STRING, allowNull: false, unique: true, comment:'问题编号id'},
		question: { type: DataTypes.STRING, allowNull: false, comment:'问题' },
		answer: { type: DataTypes.STRING,  allowNull: false, comment:'答案' },
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'help',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
