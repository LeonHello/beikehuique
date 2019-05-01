module.exports = function (sequelize, DataTypes) {
	return sequelize.define('huique', {
		id: {type: DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		msg1: {type: DataTypes.STRING, comment:'msg1'},
		msg2: {type: DataTypes.STRING, comment:'msg2'},
        msg3: {type: DataTypes.STRING, comment:'msg3'},
        msg4: {type: DataTypes.STRING, comment:'msg4'},
		msg5: {type: DataTypes.STRING, comment:'msg5'},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'huique',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
