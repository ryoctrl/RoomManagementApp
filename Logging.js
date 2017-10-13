const fs = require('fs');

function Logging(){
	this.file = "入退室管理.log";
}

Logging.prototype.write = function(message){
	const datedata = getTimestamp();
	message = datedata + message + "\n";
	fs.appendFile(this.file, message, 'utf8', function(err){
		if(err) console.log(err);
	});
}

function getTimestamp(){
	const dt = new Date();
        const year = dt.getFullYear();
        const month = dt.getMonth()+1;
        const date = dt.getDate();
        const dateT = ["日","月","火","水","木","金","土"];
        const day = dateT[dt.getDay()];
        const hours = dt.getHours();
        const minutes = dt.getMinutes();
        const seconds = dt.getSeconds();

        const datedata = year   +       "/"+
                        month   +       "/"+
                        date    +       "/("+
                        day     +       ") "+
                        hours   +       ":"+
                        minutes +       ":"+
                        seconds +       " ";

	return datedata;
}

module.exports = Logging;
