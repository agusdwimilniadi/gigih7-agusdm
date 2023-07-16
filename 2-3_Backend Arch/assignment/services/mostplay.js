const { getAllPlaylist } = require('../model/playlist');

function getMostPlayed() {
  const allPlaylist = getAllPlaylist();
  allPlaylist.sort((a, b) => parseInt(b.countPlay) - parseInt(a.countPlay));
  return allPlaylist;
  //   console.log(newSort);
}

module.exports = {
  getMostPlayed,
};
