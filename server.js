const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");

//changes to routes //will change >>>>const routes = require(“./routes”); when controllers and router folder added
//route/bookSchema.js has routes... bookcontroller has CRUD
const Book= require ("./Models/bookSchema")

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

//Enablle Middleware bodyParser
app.use(bodyParser());


//will be located in books.js in router folder
const router = require("express").Router();

// Connect to the Mongo DB
//insert the URI of MongoDB
mongoose.connect("mongodb://127.0.0.1.27017/googlebooks", {
  useNewUrlParser: true
});
// connection reference
const connection = mongoose.connection;
connection.once("open", function(){
  console.log("mongoDB connected")
})
// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use ("/", router);

router.route("/").get(function(req, res){
  Book.find(function(err, googlebooks){
    if (err){
      console.log(err);    
    } else {
      res.json(googlebooks);
    }
  });
});

router.route("/:id").get (function(req, res) {
  let id= res.params.id;
  Book.findbyId(function(err, googlebooks){
    res.json(googlebooks);
  });
});

router.route("/add").post (function(req, res) {
  let id = res.params.id;
  let book = new Book(req.body);
 book.save().then(googlebooks => {
res.status(200).json({book:"book add succesful"});
 }).catch(err => {
   res.status (400).send({book: "book add fail"});
 });
});

 



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
