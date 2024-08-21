const pool = require("../configs/db");

const postDeposito = (data) => {
  return pool.query(
    `INSERT INTO deposito (id, name, yearly_return, created_at) VALUES ($1, $2, $3, NOW())`,
    [data.id, data.name, data.yearly_return]
  );
};

const getDeposito = () => {
  return pool.query("SELECT * FROM deposito");
};

const getDetailDeposito = (id) => {
  return pool.query("SELECT * FROM deposito WHERE id = $1", [id]);
};

const putDeposito = (data, id) => {
  return pool.query(
    "UPDATE deposito SET name = $1, yearly_return = $2, updated_at = NOW() WHERE id = $3",
    [data.name, data.yearly_return, id]
  );
};

const dropDeposito = (id) => {
  return pool.query("DELETE FROM deposito WHERE id = $1", [id]);
};

module.exports = {
  postDeposito,
  getDeposito,
  getDetailDeposito,
  putDeposito,
  dropDeposito,
};
