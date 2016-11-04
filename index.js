var express = require('express');
var moment = require('moment');

var app = new express();
app.use(express.static('public'));

app.get('/:date', function(req, res){
	console.log(req.params.date);
	
	var unixTimestamp, naturalDate;
		
	if(Number(req.params.date)) {
		unixTimestamp = Number(req.params.date);
		naturalDate = moment.unix(unixTimestamp).format('MMM Do YYYY');
	}
	else {
		naturalDate = moment(req.params.date).format('MMM Do YYYY');
		unixTimestamp = moment(req.params.date).unix();
	}
	
	var object = {
		unix: unixTimestamp,
		natural: naturalDate
	};
	res.json(object);
});

app.listen(process.env.PORT || 7000);