const { v4 } = require('uuid');
const Format = require('response-format');

let itemData = [
  {
    title: 'Your Mama Wants Ya Back',
    artist: 'Betty Davis',
    url: 'https://open.spotify.com/track/4sQtduG7VRBgJLTcJhvhsR',
    isPlaying: false,
    id: 'b4c562da-37a4-4f21-8883-7e7cbb65698c',
  },
  {
    title: 'Moonsmoke',
    artist: 'Caamp',
    url: 'https://open.spotify.com/track/0YIr0EWqHv5lK9nPH0E1Aq',
    isPlaying: false,
    id: '4b043c28-1d20-4011-9e2f-a2fe31413a9d',
  },
  {
    title: 'Juicy Fruit - Single Version',
    artist: 'Mtume',
    url: 'https://open.spotify.com/track/0VZaYVM92VL8dDakvdsS9E',
    isPlaying: false,
    id: '024ebf41-5c6a-4451-a11c-eb9c29be1d79',
  },
];

// SIDU (SELECT, INSERT, DELETE, UPDATE)
const getSong = (req, res) => {
  res.status(200).send(Format.success(itemData));
};

const addSong = (req, res) => {
  const { title, artist, url } = req.body;
  const item = req.body;
  const findSong = itemData.find((item) => item.url === url);

  if (item.length > 1) {
    res
      .status(400)
      .send(Format.badRequest("Song can't add more than one", null));
  } else if (!title) {
    res.status(400).send(Format.badRequest('title is required', null));
  } else if (!artist) {
    res.status(400).send(Format.badRequest('artist is required', null));
  } else if (!url) {
    res.status(400).send(Format.badRequest('url is required', null));
  } else if (findSong) {
    console.log(findSong);
    res
      .status(400)
      .send(
        Format.badRequest(
          `Song ${findSong.title} from ${findSong.artist} is already exists`,
          null
        )
      );
  } else {
    itemData.push({ id: v4(), isPlaying: false, ...item });
    res
      .status(201)
      .send(
        Format.success(`Songs ${item.title} has been added successfully.`, item)
      );
  }
};

const deleteSong = (req, res) => {
  const { id } = req.params;
  const findSong = itemData.find((item) => item.id === id);

  if (!findSong) {
    res.status(404).send(Format.notFound('Songs not found', null));
  } else {
    itemData = itemData.filter((item) => item.id !== id);
    res
      .status(200)
      .send(Format.success(`Item with id ${id} has been deleted successfully`));
  }
};

const playSong = (req, res) => {
  const { id } = req.params;
  itemData = itemData.map((item) => {
    return { ...item, isPlaying: false };
  });
  const item = itemData.find((item) => item.id === id);
  if (!item) {
    res.status(404).send(Format.notFound('Songs not found', null));
  } else {
    item.isPlaying = true;
    res.status(200).send(Format.success('Success play song', item));
  }
};

const getSongById = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send(Format.badRequest('id is required', null));
  } else {
    const itemFound = itemData.find((item) => item.id === id);
    if (!itemFound) {
      res.status(404).send(Format.notFound('Songs not found', null));
    } else {
      res.status(200).send(Format.success('Success get songs', itemFound));
    }
  }
};

module.exports = {
  addSong,
  getSong,
  getSongById,
  deleteSong,
  playSong,
};
