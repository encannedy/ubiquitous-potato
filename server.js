const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const bodyParser =  require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1.27017/googlebooks", { useNewUrlParser: true });
//may need to change mongodb://127.0.0.1.27017/googlebooks to mongodb://localhost/googlebooks
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
