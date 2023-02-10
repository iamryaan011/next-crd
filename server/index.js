//server
const express = require("express");
const app = express();

//cors
const cors = require("cors");

//database
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "next-crud",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { email } = req.body;
  const { tel } = req.body;
  const { obs } = req.body;

  let SQL = "INSERT INTO users(name, email, tel, obs) VALUES(?,?,?,?)";

  db.query(SQL, [name, email, tel, obs], (error, result) => {
    res.send(result);
  });
});

app.get("/get", (req, res) => {
  let SQL = "SELECT * FROM users";

  db.query(SQL, (error, result) => {
    if (error) console.log(error);
    else res.send(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let SQL = "DELETE FROM users WHERE id = ?";

  db.query(SQL, id, (error, result) => {
    if (error) console.log(error);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Servidor ON");
});
