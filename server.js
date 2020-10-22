require("./models/User");
require("./models/Recipe");
const express = require("express");
const connectDB = require("./config/DB");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//connect to Database
connectDB();

//init middleware
//app.use(express.json({ extended: true }));
app.use(bodyParser.json());

// cross origin resource sharing
app.use(
  cors({
    origin: "http://66.215.112.75", //"http://104.248.186.12"
  })
);

app.get("/", (req, res) => res.send("API running"));

//define routes
app.use("/api/auth", require("./api/auth"));
app.use("/api/recipes", require("./api/recipes"));

//Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
