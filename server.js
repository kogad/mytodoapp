const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index.js");

const port = 3001;

const app = express();
app.use(bodyParser.json());

app.get("/todo/", (req, res) => {
  db.todo.findAll({}).then((todo) => {
    res.json({ todo: todo });
  });
});

app.post("/todo/", (req, res) => {
  const properties = ["id", "description", "deadline"];
  const new_values = {};
  properties.forEach(function (prop) {
    new_values[prop] = req.body[prop];
  });
  db.todo.create(new_values).then((new_todo) => {
    res.send(new_todo);
  });
});

app.delete("/todo/:id", (req, res) => {
  db.todo.destroy({ where: { id: req.params.id } }).then((result) => {
    if (result == 1) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
