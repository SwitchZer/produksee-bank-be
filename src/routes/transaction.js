const express = require("express");
const {
  createTransaction,
  readTransaction,
} = require("../controllers/transaction");
const router = express.Router();

router.post("/", createTransaction).get("/", readTransaction);

module.exports = router;
