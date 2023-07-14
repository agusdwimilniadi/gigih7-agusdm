const express = require('express');

const router = express.Router();

router.get('/user/:userId/likes', (req, res) => {
  res.send(`Ini adalah likes dari : ${req.params.userId}`);
});
router.get('/user/:userId/retweet', (req, res) => {
  res.send(`Ini adalah retweet dari : ${req.params.userId}`);
});
router.get('/user/:userId/tweet', (req, res) => {
  res.send(`Ini adalah tweet dari : ${req.params.userId}`);
});

module.exports = router;
