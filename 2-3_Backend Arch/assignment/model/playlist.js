let playlist = [
  {
    title: 'Your Mama Wants Ya Back',
    artist: 'Betty Davis',
    url: 'https://open.spotify.com/track/4sQtduG7VRBgJLTcJhvhsR',
    isPlaying: false,
    id: 'b4c562da-37a4-4f21-8883-7e7cbb65698c',
    countPlay: 3,
  },
  {
    title: 'Moonsmoke',
    artist: 'Caamp',
    url: 'https://open.spotify.com/track/0YIr0EWqHv5lK9nPH0E1Aq',
    isPlaying: false,
    id: '4b043c28-1d20-4011-9e2f-a2fe31413a9d',
    countPlay: 2,
  },
  {
    title: 'Juicy Fruit - Single Version',
    artist: 'Mtume',
    url: 'https://open.spotify.com/track/0VZaYVM92VL8dDakvdsS9E',
    isPlaying: false,
    id: '024ebf41-5c6a-4451-a11c-eb9c29be1d79',
    countPlay: 4,
  },
];

function getAllPlaylist() {
  return playlist;
}
function getPlaylistById(id) {
  const filteredPlaylist = playlist.find((item) => item.id === id);
  return filteredPlaylist;
}

module.exports = {
  getAllPlaylist,
  getPlaylistById,
};
