const express = require("express");
const router = express.Router();

router
  .post("/", createCustomers)
  .get("/", readCustomers)
  .get("/:id", readDetailCustomers)
  .put("/:id", updateCustomers)
  .delete("/:id", deleteCustomers);

module.exports = router;
