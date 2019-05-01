module.exports = function (sequelize, DataTypes) {
	return sequelize.define('fundtype', {
		id:{ type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		fundtypeid: { type: DataTypes.STRING, allowNull: false, comment:'基金种类id'},
		name: { type: DataTypes.STRING, allowNull: false, comment:'基金种类名'},
		img: { 
			type: DataTypes.STRING, 
			get() {
				return 'https://bgbsk.cn/download/fundtype_img/' + this.getDataValue('img'); 
			},
			comment:'图片链接'
		},
		num: { type:DataTypes.BIGINT, comment:'下属基金种类数目'},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'fundtype',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
