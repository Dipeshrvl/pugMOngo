const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 80;

// mongoDB
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/danceContect");
  console.log("contected to mongodb.....");
}

const contectPugSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

const contectPug = mongoose.model("contectPug", contectPugSchema);

// for render the static files
app.use("/public", express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set("view engine", "pug");

// if you want to set view folder another
// app.set("views",path.join(__dirname,"/DDD"))

// end POints
app.get("/", (req, res) => {
  res.send("Hello from express js");
});

app.get("/drvl", (req, res) => {
  const params = {
    title: "Dance India Dance",
    headLine: "Welcome To Our Dance Acadamy",
  };
  res.status(200).render("site", params);
});

app.get("/contect", (req, res) => {
  const params = {
    title: "Drvl | Contect US",
    headLine: "Contect Us",
  };
  res.status(200).render("contectus", params);
});

app.post("/contect", (req, res) => {
  //   console.log(req.body);
  const contectData = new contectPug(req.body);
  contectData
    .save()
    .then(() => {
      res.send("Data stored succesfully");
    })
    .catch(() => {
      res.status(400).send("Item not saved yet");
    });
});

app.get("/home", (req, res) => {
  const params = {
    title: "Dance India Dance",
    headLine: "Welcome To Our Dance Acadamy",
  };
  res.status(200).render("home", params);
});

app.get("/pug", (req, res) => {
  const para = "Hello, I am Dipesh Raval.";
  res.status(200).render("index", {
    title: "Pug Template",
    Line: "Welcome To Our Pug Template",
    para: para,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page", msg: "Dipesh Raval" });
});

app.listen(port, () => {
  console.log(`Litening at port ${port}`);
});
