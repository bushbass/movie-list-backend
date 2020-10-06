const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  movieID: { type: String, required: true },
  userId: { type: String, require: true },
});

module.exports = Favorite = mongoose.model('favorite', favoriteSchema);
