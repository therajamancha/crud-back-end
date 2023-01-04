const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const connectDB = require("./db/connectiondb.js");
const DATABASE_URL = process.env.DATABASE_URL;
const Employee = require("./router/EmployeeRouter.js");

app.use(express.json());

app.use("/", Employee);

app.all("*", (req, res) => {
  res.send("404 page");
});

connectDB(DATABASE_URL);

app.listen(PORT, () => {
  console.log(`app is running on port : http://localhost:${PORT}/`);
});
