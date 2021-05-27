require("dotenv").config();
const express = require("express");

const app = express();

//GET all restaurants
app.get("api/v1/restaurants", async (req, res) => {
  try {

  } catch (err){
    console.log(err);
  }
});

//GET a restaurant
app.get("api/v1/restaurants/:id", async (req, res) => {
  try {

  } catch (err){
    console.log(err);
  }

});

//CREATE a restaurant
app.post("api/v1/restaurants", async (req, res) => {
  try {

  } catch (err){
    console.log(err);
  }
});

//UPDATE a restaurant
app.put("api/v1/restaurants/:id", async (req, res) => {
  try {

  } catch (err){
    console.log(err);
  }
});

//DELETE a restaurant
app.delete("/api/v1/restaurants", async (req, res) => {
  try {

  } catch (err){
    console.log(err);
  }

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`o hi - server is up and listening on port ${port}`);
});