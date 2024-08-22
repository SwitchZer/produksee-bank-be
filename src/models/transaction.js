const pool = require("../configs/db");

const postDeposito = (data) => {
  return pool.query(
    `INSERT INTO transaction (id, accounts_id, type, nominal, created_at) VALUES ($1, $2, $3, $4, NOW())`,
    [data.id, data.accounts_id, data.type, data.nominal]
  );
};

const getTransaction = () => {
  return pool.query("SELECT * FROM transaction");
};

const getPerIdAccounts = async (id) => {
  return pool.query("SELECT * FROM transactions WHERE accounts_id = $1", [id]);
};

module.exports = {
  postDeposito,
  getTransaction,
  getPerIdAccounts,
};
