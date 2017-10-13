let request = require('request');
const Logging = require('./Logging.js');

function Slack(auth){
	this.auth = auth;
	this.logging = new Logging();
}

Slack.prototype.getID = function(){
	return this.auth.getID()
}

Slack.prototype.post = function(entry){
	var text = "";
	if(entry){
		text = "open";
	}else{
		text = "close";
	}
	request.post('https://slack.com/api/chat.postMessage',
		{
			form:{
				token: "xoxp-18471250721-41922546531-255810099842-425ecdbf044897e191a73702d87bbf2c",
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
				post
				this.logging.write(text);
			}
		}
	)
}	

module.exports = Slack;
