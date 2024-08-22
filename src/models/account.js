const pool = require("../configs/db");

const postAccounts = (data) => {
  return pool.query(
    `INSERT INTO accounts (id, packet, balance, customer_id, deposito_id, created_at) VALUES ($1, $2, $3, $4, $5, NOW())`,
    [data.id, data.packet, data.balance, data.customer_id, data.deposito_id]
  );
};

const postDeposit = (data) => {
  return pool.query(
    `INSERT INTO transaction (id, packet, balance, customer_id, deposito_id, created_at) VALUES ($1, $2, $3, $4, $5, NOW())`,
    [data.id, data.packet, data.balance, data.customer_id, data.deposito_id]
  );
};

const getAccounts = () => {
  return pool.query(`
  SELECT
    a.id,
    a.packet,
    c.name AS customer_name,
    d.name AS deposito_type,
    d.yearly_return AS yearly_rate,
    a.created_at
  FROM customers c
  JOIN accounts a ON c.id = a.customer_id
  JOIN deposito d ON a.deposito_id = d.id`);
};

const getAccountsPerCustomer = (id) => {
  return pool.query(
    `SELECT
        a.id,
        a.packet,
        c.name AS customer_name,
        d.name AS deposito_type,
        d.yearly_return AS yearly_rate,
        a.created_at
      FROM customers c
      JOIN accounts a ON c.id = a.customer_id
      JOIN deposito d ON a.deposito_id = d.id
      WHERE id = $1`,
    [id]
  );
};

const getDetailAccounts = (id) => {
  return pool.query("SELECT * FROM accounts WHERE id = $1", [id]);
};

const dropAccounts = (id) => {
  return pool.query("DELETE FROM accounts WHERE id = $1", [id]);
};

module.exports = {
  postAccounts,
  getAccounts,
  getDetailAccounts,
  getAccountsPerCustomer,
  dropAccounts,
};
