const dash_button = require('node-dash-button');
const Slack = require('./slack.js');

function Dash(auth){
	this.slack = new Slack(auth);
}

Dash.prototype.init = function(){
	var entryDetected = false;
	var exitDetected = false;
	//入室用DashButton
	const entryButtonAddr = "68:37:e9:7b:a0:b6";
	const entryButton = dash_button(entryButtonAddr, null, null, 'all');
	
	//退室用DashBUtton
	const exitButtonAddr = "68:37:e9:c5:d4:af";
	const exitButton = dash_button(exitButtonAddr, null, null, 'all');
	
	entryButton.on('detected', () => {
		if(!entryDetected){
			entryDetected = true;
			console.log("entry pushed");
			this.slack.post(true);
			this.now = new Date();			
		}
		setTimeout(() => {
				entryDetected = false;
			}, 5000);
	});
	
	exitButton.on('detected', () => {
		if(!exitDetected){
			exitDetected = true;
			console.log("exit pushed");
			this.slack.post(false);
		}
		setTimeout(() => {
				exitDetected = false;
			}, 5000);
	});
}

function buttonDetected(){
	
}

module.exports = Dash;
