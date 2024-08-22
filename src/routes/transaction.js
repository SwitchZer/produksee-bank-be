const express = require("express");
const {
  createTransaction,
  readTransaction,
  readPerIdAccounts,
} = require("../controllers/transaction");
const router = express.Router();

router
  .post("/", createTransaction)
  .get("/", readTransaction)
  .get("/:id", readPerIdAccounts);

module.exports = router;
