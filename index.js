require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./src/routes");

const PORT = process.env.PORT;
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use((error, req, res, next) => {
  console.log(error);
  const messageError = error.message || "Internal Server Error";
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: messageError,
  });
});

app.use("/v1", routes);

app.get("/", (req, res, next) => {
  res.send("Bank Saving System API is Running and Ready to Use");
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
