const express = require('express');

const router = express.Router();

const {
  getSong,
  addSong,
  deleteSong,
  getSongById,
  playSong,
} = require('../controllers/songs');

router.get('/', getSong);
router.post('/', addSong);
router.delete('/:id', deleteSong);
router.post('/play/:id', playSong);

router.get('/:id', getSongById);

module.exports = router;
