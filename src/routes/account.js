const express = require("express");
const {
  createAccounts,
  readAccounts,
  readDetailAccounts,
  deleteAccounts,
  readAccountsPerCustomer,
  updateAccounts,
} = require("../controllers/account");
const router = express.Router();

router
  .post("/", createAccounts)
  .get("/", readAccounts)
  .get("/:id", readDetailAccounts)
  .put("/:id", updateAccounts)
  .get("/customer/:id", readAccountsPerCustomer)
  .delete("/:id", deleteAccounts);

module.exports = router;
