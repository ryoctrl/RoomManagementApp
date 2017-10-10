const Logging = require('./Logging.js');

function Auth(id, password){
	this.studentID = id;
	this.password = password;
	this.logging = new Logging();
}
	
Auth.prototype.getID = function(){
	return this.studentID;
}

Auth.prototype.login = function(){
	var auth = require('request');
	url = 'https://ninsho-nw3.kudos.kindai.ac.jp:8000/cgi-bin/adeflogin.cgi';

	auth.post(url,
		{
			form:{
				'name': this.studentID,
				'pass': this.password,
			}
		}
		, (error, response, body) =>{
			console.log("auth posted");
			if(error){
				message = "LoginError:" + error;
				logging.write(message);
				console.log(error);
			}else{
				logging.write("login succeeded");
				console.log("auth succeeded");
			}
		}
	);	
}
module.exports = Auth;
