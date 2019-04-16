const express = require("express");
const mongoose = require("mongoose");
const routes= require("./routes/api/books.js")
const app = express();
const PORT = process.env.PORT || 3001;

// Defines middle here
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// adding routes here
app.use("/api/books", routes);

// Connect to the MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ReactGoogleBooks")
    .then(result => console.log("//connected to mongoo"))
    .catch(err => console.log(err));
   
app.listen(PORT, function() {
    console.log(` ===> API Server now listening on PORT ${PORT}!`);

});
