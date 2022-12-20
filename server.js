const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kalobiral:kalobiral@cluster0.aj0djdx.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.set("strictQuery", true);

const mongoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thought: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const mongoModel = mongoose.model("model1", mongoSchema);

app.listen(5555);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/create", (req, res) => {
  console.log(req.body);
  const model = new mongoModel({
    title: req.body.title,
    thought: req.body.thought,
    phoneNumber: req.body.phoneNumber,
  });
  model.save();
  console.log("data saved");
});

app.get("/read", async (req, res) => {
  let gotData = await mongoModel.find({});
  res.send(gotData);
  console.log("Data sent successfully");
});
