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
	//url = 'http://ninsho-nw1.kudos.kindai.ac.jp:8000/cgi-bin/adeflogin.cgi';
	url = 'http://ninsho-nw1.kudos.kindai.ac.jp:8001/';

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
				this.logging.write(message);
				console.log(error);
			}else{
				this.logging.write("login succeeded");
				console.log("auth succeeded");
			}
		}
	);	
}
module.exports = Auth;
