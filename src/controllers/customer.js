const { v4: uuidv4 } = require("uuid");
const { response } = require("../helpers/common");
const newError = require("http-errors");
const {
  getCustomers,
  postCustomers,
  putCustomers,
  dropCustomers,
  getDetailCustomers,
} = require("../models/customer");

const createCustomers = async (req, res, next) => {
  const { name, gender, dob, address, phone, email } = req.body;
  const Id = uuidv4();

  const data = {
    id: Id,
    name,
    gender,
    dob,
    address,
    phone,
    email,
  };

  try {
    await postCustomers(data);
    response(res, data, 200, "Customer Successfully Added!!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readCustomers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const { rows } = await getCustomers({
      search,
    });

    response(res, rows, 200, "get All Customers Success");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readDetailCustomers = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { rows } = await getDetailCustomers(id);
    if (rows == 0) {
      return next(new newError.NotFound("Customers Not Found"));
    }
    response(res, rows, 200, "Get Customers Detail Success!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const updateCustomers = async (req, res, next) => {
  const id = req.params.id;
  const { name, gender, dob, address, phone, email } = req.body;

  const data = {
    name,
    gender,
    dob,
    address,
    phone,
    email,
  };
  try {
    await putCustomers(data, id);
    response(res, data, 200, "Data Updated!!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const deleteCustomers = async (req, res, next) => {
  const id = req.params.id;
  try {
    await dropCustomers(id);
    response(res, { id }, 200, `Customers Deleted!!!`);
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

module.exports = {
  createCustomers,
  readCustomers,
  readDetailCustomers,
  updateCustomers,
  deleteCustomers,
};
