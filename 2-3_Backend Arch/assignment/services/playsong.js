const { getPlaylistById } = require('../model/playlist');

function playSongServices(id) {
  const playlistFiltered = getPlaylistById(id);
  if (!playlistFiltered) {
    throw new Error('Song tidak ditemukan');
  }
  playlistFiltered.countPlay = playlistFiltered.countPlay + 1;
}

module.exports = {
  playSongServices,
};
