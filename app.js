const express = require("express");
const { port } = require("./config");
const { connection } = require("./config/db");
const jobs = require("./routes/jobs.routes"); 
const categories = require("./routes/categories.routes"); 
const countries = require("./routes/countries.routes"); 

connection();

const app = express();

app.use(express.json());

jobs(app); 
categories(app);
countries(app); 

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});