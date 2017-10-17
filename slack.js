const request = require('request');
const Logging = require('./Logging.js');

function Slack(auth){
	this.auth = auth;
	this.logging = new Logging();
	this.token = "";
}

Slack.prototype.getID = function(){
	return this.auth.getID()
}

Slack.prototype.post = function(entry){
	if(!this.token){
		console.log("please input token to slack.js!");
		return;
	}
	var text = "";
	if(entry){
		text = "open";
	}else{
		text = "close";
	}
	request.post('https://slack.com/api/chat.postMessage',
		{
			form:{
				token: this.token,
				channel: "#鍵持ってます",
				//channel: "#bot_making",
				text: text
			}
		}
		, (error, response, body) => {
			if(error){
				console.log(error);
				this.logging.write("RequestError:" + error);
				//this.auth.login();
				//this.post();
			} else {
				this.logging.write(text);
			}
		}
	)
}	

module.exports = Slack;
/*
class Slack{
	constructor(auth){
		this.auth = auth;
		this.logging = new Logging();
		this.token = "";
	}

	post(entry){
		if(!this.token){
			console.log("please input token to slack.js");
			return;
		}

		let text = "";
		if(entry){
			text = "open";
		}else{
			text = "close";
		}

		const url = "https://slack.com/api/chat.postMessage";
		request.post(url,
			{
				form:{
					token: this.token,
					channel: "#鍵持ってます",
					text: text
				}
			}, (error, response, body) => {
				if(error){
					console.log(error);
					this.logging.write("RequestError: error);
					//this.auth.login();
					//this.post();
				} else{
					this.logging.write(text);
				}
			}
		);
	}
}
*/
}
