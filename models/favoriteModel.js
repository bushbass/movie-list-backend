const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  userId: { type: String, require: true },
});

module.exports = Todo = mongoose.model('todo', favoriteSchema);
