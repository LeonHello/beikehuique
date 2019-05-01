var moment = require('moment');

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('activity', {
		id:{ type: DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true, comment:'自增型主键id'},
		activityid:{ type: DataTypes.STRING, allowNull: false, unique: true, comment:'活动编号id'},
		name: { type: DataTypes.STRING, allowNull: false, comment:'活动名称'},
		starttime: { 
			type: DataTypes.DATE, 
			allowNull: false, 
			get(){ 
				return moment(this.getDataValue('starttime')).format('YYYY-MM-DD HH:mm');
			},
			comment:'活动开始时间'
		},
		endtime: { 
			type: DataTypes.DATE, 
			allowNull: false, 
			get(){
				return moment(this.getDataValue('endtime')).format('YYYY-MM-DD HH:mm');
			},
			comment:'活动结束时间' 
		},
		deadline: {
			type: DataTypes.DATE, 
			allowNull: false, 
			get(){
				return moment(this.getDataValue('deadline')).format('YYYY-MM-DD HH:mm');
			},
			comment:'报名截止时间'
		},
		place: {type: DataTypes.STRING, allowNull: false, comment:'活动地点'},
		detail: {type: DataTypes.TEXT, allowNull: false, comment:'活动详情'},
		remark: {type: DataTypes.STRING, comment:'活动备注'},
        status: {
			type: DataTypes.ENUM,
			values: ['报名中','进行中','已结束'], 
            allowNull: false, 
            comment: '状态',
		},
		img: {
			type: DataTypes.STRING, 
			get(){
				return 'https://bgbsk.cn/download/activity_material' + this.getDataValue('img');
			},
			comment:'活动图片链接'
		},
		essay_url: {type: DataTypes.STRING, comment:'文章推送地址'},
	},
	{
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		tableName: 'activity',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
