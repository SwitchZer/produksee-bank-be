const pool = require("../configs/db");

const postCustomers = (data) => {
  return pool.query(
    `INSERT INTO customers (id, name, gender, dob, address, phone, email, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
    [
      data.id,
      data.name,
      data.gender,
      data.dob,
      data.address,
      data.phone,
      data.email,
    ]
  );
};

const getCustomers = () => {
  return pool.query("SELECT * FROM customers");
};

const getDetailCustomers = (id) => {
  return pool.query("SELECT * FROM customers WHERE id = $1", [id]);
};

const putCustomers = (data, id) => {
  return pool.query(
    "UPDATE customers SET name = $1, gender = $2, dob = $3, address = $4, phone= $5, email = $6, updated_at = NOW() WHERE id = $7",
    [data.name, data.gender, data.dob, data.address, data.phone, data.email, id]
  );
};

const dropCustomers = (id) => {
  return pool.query("DELETE FROM customers WHERE id = $1", [id]);
};

module.exports = {
  postCustomers,
  getCustomers,
  getDetailCustomers,
  putCustomers,
  dropCustomers,
};
