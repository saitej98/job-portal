const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

require("dotenv").config();
const db = require("./config/db").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
  });
  