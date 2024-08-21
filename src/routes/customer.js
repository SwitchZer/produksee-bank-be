const express = require("express");
const {
  createCustomers,
  readCustomers,
  readDetailCustomers,
  updateCustomers,
  deleteCustomers,
} = require("../controllers/customer");
const router = express.Router();

router
  .post("/", createCustomers)
  .get("/", readCustomers)
  .get("/:id", readDetailCustomers)
  .put("/:id", updateCustomers)
  .delete("/:id", deleteCustomers);

module.exports = router;
