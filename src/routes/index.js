const express = require("express");
const router = express.Router();
const customersRoute = require("./customer");
const accountsRoute = require("./account");
const depositoRoute = require("./deposito");
const transactionRoute = require("./transaction");

router.use("/customers", customersRoute);
router.use("/accounts", accountsRoute);
router.use("/deposito", depositoRoute);
router.use("/transactions", transactionRoute);

module.exports = router;
