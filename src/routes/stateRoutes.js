const express = require("express");
const StateController = require("../controllers/StateController");

const stateRouter = express.Router();
const stateController = new StateController();

stateRouter.get("/:state", stateController.searchstate);

module.exports = stateRouter;
