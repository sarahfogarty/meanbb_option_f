var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = (function(){
	return {
		create: function(req,res){
			var survey = new Survey(req.body);
			survey.save(function(err){
				if(err){
					res.json({err:err, survey:null})
				}
				else {
					res.json({err:null, survey:survey})
				}
			})
		},

		index: function(req,res){
			Survey.find({},function(err,surveys){
				res.json(surveys);
			})
		},

		show: function(req,res){
			Survey.findOne({_id:req.params.id}, function(err,data){
				if(err){
					res.json(err);
				}
				else{
					res.json(data)
				}
			})
		},

		updateOption1Vote: function(req,res){
			Survey.findByIdAndUpdate(req.params.id, {$inc:{option1Vote:+1}}, function(err,data){
					if(err){
						res.json(err)
					}
					else {
						res.json(data)
					}
				}
			)
		},

		updateOption2Vote: function(req,res){
			Survey.findByIdAndUpdate(req.params.id, {$inc:{option2Vote:+1}}, function(err,data){
					if(err){
						res.json(err)
					}
					else {
						res.json(data)
					}
				}
			)
		},

		updateOption3Vote: function(req,res){
			Survey.findByIdAndUpdate(req.params.id, {$inc:{option3Vote:+1}}, function(err,data){
					if(err){
						res.json(err)
					}
					else {
						res.json(data)
					}
				}
			)
		},

		updateOption4Vote: function(req,res){
			Survey.findByIdAndUpdate(req.params.id, {$inc:{option4Vote:+1}}, function(err,data){
					if(err){
						res.json(err)
					}
					else {
						res.json(data)
					}
				}
			)
		},

		destroy: function(req,res){
			Survey.remove({_id:req.params.id}, function(err){
				if(err){
					console.log(err);
					res.json({status:"false"});
			 	}
			 	else{
			 		res.json({status:"true"});
			 	}
			})
		}
	}
})();
