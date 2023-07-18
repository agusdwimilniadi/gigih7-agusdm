const songs = [
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
  },
  {
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
  },
  {
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
  },
  {
    title: 'Hey Jude',
    artist: 'The Beatles',
    album: 'The Beatles (White Album)',
  },
  {
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
  },
  {
    title: 'Thriller',
    artist: 'Michael Jackson',
    album: 'Thriller',
  },
  {
    title: 'Wonderwall',
    artist: 'Oasis',
    album: "(What's the Story) Morning Glory?",
  },
  {
    title: 'Hallelujah',
    artist: 'Leonard Cohen',
    album: 'Various Positions',
  },
  {
    title: 'Someone Like You',
    artist: 'Adele',
    album: '21',
  },
];

db.Songs.insertMany(songs);

const artist = [
  {
    name: 'Queen',
    dateOfBirth: '1946-09-05',
    genres: ['Rock'],
  },
  {
    name: 'Eagles',
    dateOfBirth: '1947-06-06',
    genres: ['Rock', 'Country'],
  },
  {
    name: 'Ed Sheeran',
    dateOfBirth: '1991-02-17',
    genres: ['Pop', 'Folk', 'R&B'],
  },
  {
    name: 'John Lennon',
    dateOfBirth: '1940-10-09',
    genres: ['Rock'],
  },
  {
    name: 'The Beatles',
    dateOfBirth: '1960-01-01',
    genres: ['Rock', 'Pop'],
  },
  {
    name: 'Nirvana',
    dateOfBirth: '1967-02-20',
    genres: ['Grunge', 'Alternative Rock'],
  },
  {
    name: 'Michael Jackson',
    dateOfBirth: '1958-08-29',
    genres: ['Pop', 'R&B'],
  },
  {
    name: 'Oasis',
    dateOfBirth: '1967-09-05',
    genres: ['Britpop', 'Rock'],
  },
  {
    name: 'Leonard Cohen',
    dateOfBirth: '1934-09-21',
    genres: ['Folk', 'Rock', 'Poetry'],
  },
  {
    name: 'Adele',
    dateOfBirth: '1988-05-05',
    genres: ['Pop', 'Soul'],
  },
];

db.artist.insertMany(artist);

const popular = [
  {
    title: 'Bohemian Rhapsody',
    playCount: 1000,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Hotel California',
    playCount: 850,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Shape of You',
    playCount: 1200,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Imagine',
    playCount: 750,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Hey Jude',
    playCount: 920,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Smells Like Teen Spirit',
    playCount: 1100,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Thriller',
    playCount: 980,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Wonderwall',
    playCount: 890,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Hallelujah',
    playCount: 800,
    period: '2023-01-01 - 2023-06-30',
  },
  {
    title: 'Someone Like You',
    playCount: 950,
    period: '2023-01-01 - 2023-06-30',
  },
];

db.popularSong.insertMany(popular);
