module.exports = function (sequelize, DataTypes) {
	return sequelize.define('fund', {
		id:{ type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		fundid:{ type: DataTypes.STRING, allowNull: false, unique: true, comment:'基金编号id'},
		fundtype: {type: DataTypes.BIGINT, allowNull: false, comment:'基金种类'},
		name: { type: DataTypes.STRING, allowNull: false, comment:'基金名'},
		people: { type: DataTypes.TEXT, comment:'资助对象'},
		mode: {type: DataTypes.TEXT, comment:'资助方式'},
		process_img: {
			type: DataTypes.STRING, 			
			get(){
				return 'https://bgbsk.cn/download/fund_material' + this.getDataValue('process_img');
			},
			comment:'申请流程图片链接'
		},
		process_text: {type: DataTypes.TEXT, comment:'申请流程文字'},
		contact: {type: DataTypes.TEXT, comment:'联系方式'},
		form: {
			type: DataTypes.STRING, 
			comment:'申请表链接'
		},
		record_num: {type: DataTypes.STRING, comment:'备案号'},
		vedio: {
			type: DataTypes.STRING, 
			get(){
				return 'https://bgbsk.cn/download/fund_material' + this.getDataValue('vedio');
			},
			comment: '视频链接'
		},
		audio: {
			type: DataTypes.STRING, 
			get(){
				return 'https://bgbsk.cn/download/fund_material' + this.getDataValue('audio');
			},
			comment: '音频链接'
		},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'fund',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
