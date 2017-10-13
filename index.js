const read = require('readline-sync');
//const userID = read.question('StudentId:');
//const password = read.question('Password:',{hideEchoBack:true});

const userID = "dummyID";
const password = "dummyPassword";

const Auth = require('./auth.js');
const auth = new Auth(userID, password);

const Dash = require('./dash.js');
const dash = new Dash(auth); 
dash.init();
