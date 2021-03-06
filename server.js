var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

// routes
app.get("/", function(req, res) {
	res.render("index");
})

app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.listen(port, function() {
	console.log("app running");
})