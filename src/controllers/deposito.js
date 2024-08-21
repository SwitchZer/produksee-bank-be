const { v4: uuidv4 } = require("uuid");
const { response } = require("../helpers/common");
const newError = require("http-errors");
const {
  postDeposito,
  putDeposito,
  dropDeposito,
  getDetailDeposito,
  getDeposito,
} = require("../models/deposito");

const createDeposito = async (req, res, next) => {
  const { name, yearly_return } = req.body;
  const Id = uuidv4();

  const data = {
    id: Id,
    name,
    yearly_return,
  };

  try {
    await postDeposito(data);
    response(res, data, 200, "Customer Successfully Added!!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readDeposito = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const { rows } = await getDeposito({
      search,
    });

    response(res, rows, 200, "get All Deposito Success");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readDetailDeposito = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { rows } = await getDetailDeposito(id);
    if (rows == 0) {
      return next(new newError.NotFound("Deposito Not Found"));
    }
    response(res, rows, 200, "Get Deposito Detail Success!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const updateDeposito = async (req, res, next) => {
  const id = req.params.id;
  const { name, yearly_return } = req.body;

  const data = {
    name,
    yearly_return,
  };

  try {
    await putDeposito(data, id);
    response(res, data, 200, "Data Updated!!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const deleteDeposito = async (req, res, next) => {
  const id = req.params.id;
  try {
    await dropDeposito(id);
    response(res, { id }, 200, `Deposito Deleted!!!`);
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

module.exports = {
  createDeposito,
  readDeposito,
  readDetailDeposito,
  updateDeposito,
  deleteDeposito,
};
