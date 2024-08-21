const { v4: uuidv4 } = require("uuid");
const { response } = require("../helpers/common");
const newError = require("http-errors");
const {
  getAccounts,
  getDetailAccounts,
  dropAccounts,
  postAccounts,
} = require("../models/account");

const createAccounts = async (req, res, next) => {
  const { packet, customer_id, deposito_id } = req.body;
  const Id = uuidv4();

  const data = {
    id: Id,
    packet,
    customer_id,
    deposito_id,
  };

  try {
    await postAccounts(data);
    response(res, data, 200, "Account Successfully Added!!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readAccounts = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const { rows } = await getAccounts({
      search,
    });

    response(res, rows, 200, "get All Accounts Success");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readDetailAccounts = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { rows } = await getDetailAccounts(id);
    if (rows == 0) {
      return next(new newError.NotFound("Accounts Not Found"));
    }
    response(res, rows, 200, "Get Accounts Detail Success!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readAccountsPerCustomer = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { rows } = await getAccountsPerCustomer(id);
    if (rows == 0) {
      return next(new newError.NotFound("Accounts Not Found"));
    }
    response(res, rows, 200, "Get Accounts Detail Success!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const deleteAccounts = async (req, res, next) => {
  const id = req.params.id;
  try {
    await dropAccounts(id);
    response(res, { id }, 200, `Accounts Deleted!!!`);
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

module.exports = {
  createAccounts,
  readAccounts,
  readDetailAccounts,
  readAccountsPerCustomer,
  deleteAccounts,
};
