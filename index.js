
const express = require('express')
const path = require('path')

//const braintree = require('braintree')

//tentative port path , no enviornment variables yet
const PORT = process.env.PORT || 5000
const app = express();


app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

// consider middleware functions 

const listener = app.listen(process.env.PORT, () => {
	console.log("App is listening on port " + listener.address().port)
});