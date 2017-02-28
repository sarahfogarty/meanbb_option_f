var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	updated_at:{ type: Date, default:Date.now }
});


var surveySchema = mongoose.Schema({
	name        :String,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
	question    :{ type:String, minlength:8 },
	option1 	:{ type:String, minlength:3 },
	option2 	:{ type:String, minlength:3 },
	option3 	:{ type:String, minlength:3 },
	option4 	:{ type:String, minlength:3 },
	option1Vote 	:{ type: Number, default: 0 },
	option2Vote 	:{ type: Number, default: 0 },
	option3Vote 	:{ type: Number, default: 0 },
	option4Vote 	:{ type: Number, default: 0 },
	created_at  :{ type: Date, default: Date.now }
}) 


mongoose.model('User',userSchema);
mongoose.model('Survey',surveySchema);

surveySchema.path('question').required(true, "Question is required");
surveySchema.path('option1').required(true, "Option 1 is required");
surveySchema.path('option2').required(true, "Option 2 is required");
surveySchema.path('option3').required(true,"Option 3 is required");
surveySchema.path('option4').required(true,"Option 4 is required");
