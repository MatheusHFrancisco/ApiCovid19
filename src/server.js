require("dotenv").config();
var cors = require("cors");
const router = require("./routes/routes");

const express = require("express");

const app = express();
app.use(cors());
app.use(router);

app.listen(3000, () => console.log("Server is running on port 3000"));
