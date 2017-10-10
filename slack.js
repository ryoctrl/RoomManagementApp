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
		text = "部室空室";
	}else{
		text = "部室扉閉";
	}
	request.post('https://slack.com/api/chat.postMessage',
		{
			form:{
				token: 'xoxp-18471250721-41922546531-210911699312-9ad8d69b180c99acb2f001fda69958f4',
				//channel: "#鍵持ってます",
				channel: "#bot_making",
				as_user: 'true',
				text: text
			}
		}
		, (error, response, body) => {
			if(error){
				console.log(error);
				logging.write("Error:" + error);
				this.auth.login();
				this.post();
			}
			else console.log('SendMessage:' + text );
		}
	)
}	

module.exports = Slack;
