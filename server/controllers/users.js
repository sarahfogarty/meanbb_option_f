var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		create: function(req,res){
			console.log("username is:", req.body.name)
			User.findOne({name: req.body.name }, function(err,user){
				if(!user){
					var newUser = new User(req.body);
					newUser.save(function(err){
						if(err) {
							console.log(err);
							res.json({err:err, user: null});
						}
						else{
						res.json({err:null, user: newUser});
						}
					})
				}
				else {
					res.json({err:null, user:user});
				}
			});
		}
	}
})();
