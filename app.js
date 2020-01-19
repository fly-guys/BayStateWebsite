const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const itemsSchema = {
  name: String
};

app.get("/", function(req, res) {

  res.render("home");

});

app.listen(3000, function() {
  console.log("Server started successfully");
});
