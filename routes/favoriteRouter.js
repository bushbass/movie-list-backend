const router = require('express').Router();
const auth = require('../middleware/auth');
const Favorite = require('../models/favoriteModel');

router.post('/', auth, async (req, res) => {
  try {
    const { title } = req.body;
    //validation
    if (!title)
      return res.status(400).json({ msg: 'Not all fields have been entered' });

    const newFavorite = new Favorite({
      title,
      userId: req.user,
    });
    const savedFavorite = await newFavorite.save();
    res.json(savedFavorite);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get all favorites from logged in user
router.get('/', auth, async (req, res) => {
  const favorites = await Favorite.find({ userId: req.user });
  res.json(favorites);
});

// get specific favorite from logged in user
router.get('/:id', auth, async (req, res) => {
  const favorite = await Favorite.find({
    userId: req.user,
    _id: req.params.id,
  });
  res.json(favorite);
});

router.delete('/:id', auth, async (req, res) => {
  console.log({ params: req.params });
  const favorite = await Favorite.findOne({
    userId: req.user,
    _id: req.params.id,
  });
  if (!favorite)
    return res
      .status(400)
      .json({ msg: 'no favorite found with id that belongs to current user' });

  const deletedFavorite = await Favorite.findByIdAndDelete(req.params.id);
  console.log({ deletedFavorite });
  res.json(deletedFavorite);
});

module.exports = router;
