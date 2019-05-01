
var Sequelize = require('sequelize');

exports.sequelize = function () {
	return new Sequelize('huique_node', 'root', '123456', 
	{
		host: 'localhost', 
		port:3306, 
		logging:console.log, 
		dialect:"mysql", 
		timezone: '+08:00'
	});
}
