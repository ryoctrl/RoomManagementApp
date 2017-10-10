const read = require('readline-sync');
const userID = read.question('StudentId:');
const password = read.question('Password:',{hideEchoBack:true});

const Auth = require('./auth.js');
const auth = new Auth(userID, password);
console.log(auth.getID());

const Dash = require('./dash.js');
const dash = new Dash(auth); 
dash.init();
