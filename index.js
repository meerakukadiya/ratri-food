var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
var app = express();
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//For Image Uploading
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb'
}));
app.use("/public", express.static(path.join(__dirname, "public")));


//Route Connection
app.use("/vendor", require("./routes/vendorRoutes"));
app.use("/user",require('./routes/customerRoutes'));
app.use("/admin",require('./routes/adminRoutes'));


//Database connection with mongodb
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017",
    {
      dbName: "nightBazar",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log({err : err}) : console.log(
        "Connected to demo-name database")
  );


  //Running Server Port
  app.listen(8000, function () {
    console.log('Listening to Port 8000');
  });
