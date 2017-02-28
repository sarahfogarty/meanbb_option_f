module.exports = function(app) {
	var users = require('./../controllers/users.js')
	var survey = require('./../controllers/survey.js')

	app.get('/surveys', function(req,res){
		survey.index(req,res);
	});

	app.post('/users', function(req,res){
		users.create(req,res);
	});

	app.post('/survey', function(req,res){
		survey.create(req,res);
	})

	app.get('/survey/:id', function(req,res){
		survey.show(req,res);
	})

	app.patch('/survey/option1/:id', function(req,res){
		survey.updateOption1Vote(req,res);
	})

	app.patch('/survey/option2/:id', function(req,res){
		survey.updateOption2Vote(req,res);
	})

	app.patch('/survey/option3/:id', function(req,res){
		survey.updateOption3Vote(req,res);
	})
	
	app.patch('/survey/option4/:id', function(req,res){
		survey.updateOption4Vote(req,res);
	})

	app.delete('/survey/:id', function(req,res){
		survey.destroy(req,res);
	});

	// app.patch('/users/:id', function(req,res){
	// 	users.update(req,res);
	// })

	// app.get('/orders', function(req,res){
	// 	orders.show(req,res);
	// });

	// app.post('/orders', function(req,res){
	// 	// console.log(req.body);
	// 	orders.add(req,res);
	// })

	// app.get('/products',function(req,res){
	// 	products.show(req,res);
	// })

	// app.post('/products',function(req,res){
	// 	products.add(req,res);
	// })

	// app.put('/products', function(req,res){
	// 	// console.log(req.body);
	// 	products.update(req,res);
	// })
};