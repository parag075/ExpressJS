const mongoose = require("mongoose");
const TodosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Todos = mongoose.model("Todos", TodosSchema);

exports.Todos = Todos;
