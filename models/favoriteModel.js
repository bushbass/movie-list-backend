const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  rating: { type: Number },
  movieId: { type: String, required: true },
  userId: { type: String, require: true },
});

module.exports = Favorite = mongoose.model('favorite', favoriteSchema);
