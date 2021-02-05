const express = require("express");
const CityController = require("../controllers/CityController");

const cityRouter = express.Router();
const cityController = new CityController();

cityRouter.get("/:city", cityController.buscasocidade);

module.exports = cityRouter;
