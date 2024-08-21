const express = require("express");
const {
  createDeposito,
  readDeposito,
  readDetailDeposito,
  updateDeposito,
  deleteDeposito,
} = require("../controllers/deposito");
const router = express.Router();

router
  .post("/", createDeposito)
  .get("/", readDeposito)
  .get("/:id", readDetailDeposito)
  .put("/:id", updateDeposito)
  .delete("/:id", deleteDeposito);

module.exports = router;
