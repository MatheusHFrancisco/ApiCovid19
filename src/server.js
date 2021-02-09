require("dotenv").config();
var cors = require("cors");
const router = require("./routes/routes");

const express = require("express");

const app = express();
app.use(cors());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta %d", process.env.PORT || 3000);
});
