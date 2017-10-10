const fs = require('fs');

function Logging(){
	this.file = "入退室管理.log";
}

Logging.prototype.write = function(message){
	message += "\n";
	fs.appendFile(this.file, message, 'utf8', function(err){
		if(err) console.log(err);
	});
}

module.exports = Logging;

