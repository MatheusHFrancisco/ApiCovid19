const express = require("express");
const BrazilController = require("../controllers/BrazilController");

const brazilRouter = express.Router();
const brazilController = new BrazilController();

brazilRouter.get("/", brazilController.searchBrazil);

module.exports = brazilRouter;
