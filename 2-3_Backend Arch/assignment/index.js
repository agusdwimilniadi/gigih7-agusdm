const express = require('express');
const bodyParser = require('body-parser');
const { getAllPlaylist, getPlaylistById } = require('./model/playlist');
const { playSongServices } = require('./services/playsong');
const { getMostPlayed } = require('./services/mostplay');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/playlist/:id', (req, res) => {
  const id = req.params.id;
  const dataSong = getPlaylistById(id);
  try {
    playSongServices(id);
    res.status(200).json({
      success: true,
      data: {
        id,
        message: `Song ${dataSong.title} has been played, for ${dataSong.countPlay}x`,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/playlist/most/asc', (req, res) => {
  const getMost = getMostPlayed();
  res.status(200).json(getMost);
});
app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
