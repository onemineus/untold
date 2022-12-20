const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kalobiral:kalobiral@cluster0.aj0djdx.mongodb.net/?retryWrites=true&w=majority"
);


