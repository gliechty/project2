var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }
});

User.methods.encrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password){
	// will explode password- does it look like exploded thing on right?
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);