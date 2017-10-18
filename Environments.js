const json = require('./.env.json');

class Environments{
	getValue(key){
		return json[key];
	}
}

module.exports = Environments;
