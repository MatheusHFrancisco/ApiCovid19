const cityRouter = require("./cityRoutes");
const stateRouter = require("./stateRoutes");
const brazilRouter = require("./brazilRoutes");
const express = require("express");
const router = express.Router();

router.use("/city", cityRouter);
router.use("/state", stateRouter);
router.use("/brazil", brazilRouter);

module.exports = router;
