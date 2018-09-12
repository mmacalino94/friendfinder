//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express App
var app = express();
var PORT = process.env.PORT|8080;

//Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/static', express.static(path.join(__dirname, 'app/public')))

//Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Listen
app.listen(PORT, function() {
    console.log("FriendFinder app is listening on PORT " + PORT);
})