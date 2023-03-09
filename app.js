const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3000;
const fetch = require("node-fetch");
let day_list = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// API key
const myKey = "8423f9cb1ce8cbca282e7515483fd145";

// k to cel
function kToC(k) {
  return (k - 273.15).toFixed(2);
}

// middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:city", async (req, res) => {
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=${myKey}`;
  let date = new Date();
  let day = day_list[date.getDay()];

  // node fetch @2.6.1
  fetch(url)
    .then((d) => d.json())
    .then((djs) => {
      res.render("weather.ejs", { djs, date, day });
    })
    .catch((err) => {
      console.log(err);
      res.render("error.ejs");
    });
});

app.get("/*", (req, res) => {
  res.status(404).send("404 Page not found.");
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).render("error.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
