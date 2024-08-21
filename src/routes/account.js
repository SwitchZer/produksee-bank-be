const express = require("express");
const {
  createAccounts,
  readAccounts,
  readDetailAccounts,
  deleteAccounts,
} = require("../controllers/account");
const router = express.Router();

router
  .post("/", createAccounts)
  .get("/", readAccounts)
  .get("/:id", readDetailAccounts)
  .delete("/:id", deleteAccounts);

module.exports = router;
