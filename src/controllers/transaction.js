const { v4: uuidv4 } = require("uuid");
const { response } = require("../helpers/common");
const newError = require("http-errors");

const createTransaction = async (req, res, next) => {
  const { accounts_id, type, nominal } = req.body;
  const Id = uuidv4();

  const data = {
    id: Id,
    accounts_id,
    type,
    nominal,
  };

  try {
    await postTransaction(data);
    response(res, data, 200, "Customer Successfully Added!!");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

const readTransaction = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const { rows } = await getTransaction({
      search,
    });

    response(res, rows, 200, "get All Transaction Success");
  } catch (error) {
    console.log(error);
    next(new newError.InternalServerError());
  }
};

module.exports = {
  createTransaction,
  readTransaction,
};
