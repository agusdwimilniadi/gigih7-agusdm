function songPromiseFunc(songPromise) {
  songPromise
    .then(() => {
      return songPromise;
    })
    .then((song2) => {
      console.log('List song : ', song2);
    })
    .catch((error) => {
      console.log(error);
    });
}
async function songPromiseAsyncAwait(songPromise) {
  try {
    const songs = await songPromise;
    console.log(songs);
  } catch (error) {
    console.log(error);
  }
}

const songPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const songList = [
      {
        title: 'song title 1',
        artists: [{ name: 'artist name 1' }],
        duration: 100,
      },
      {
        title: 'song title 2',
        artists: [{ name: 'artist name 2' }],
        duration: 200,
      },
      {
        title: 'song title 3',
        artists: [{ name: 'artist name 3' }],
        duration: 300,
      },
    ];
    resolve(songList);
    // reject('Gagal print song');
  }, 2000);
});

songPromiseFunc(songPromise);
// songPromiseAsyncAwait(songPromise);
