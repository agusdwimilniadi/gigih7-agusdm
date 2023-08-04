import { Sidebar } from '../../Components/molecules/Sidebar';
import {
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
  MdOutlineDownloadForOffline,
} from 'react-icons/md';
import { BsPlayFill } from 'react-icons/bs';
import { PlaylistTypeItem } from '../../Components/atoms/PlaylistTypeItem';
import { SquarePlaylist } from '../../Components/atoms/SquarePlaylist';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'flowbite-react';

const CLIENT_ID = '5ea33907a5754562ac98af293f342b24';
const REDIRECT_URI = 'http://localhost:5173/';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

const DATA_PLAYLIST = [
  {
    label: 'Code',
    image: 'https://i.scdn.co/image/ab67616d0000b27382a568fd0ee2837ac243f05e',
  },
  {
    label: 'Lorem Playlist',
    image: 'https://i1.sndcdn.com/avatars-000171024381-f12ng2-t240x240.jpg',
  },
  {
    label: 'Viral Hits',
    image:
      'https://i1.sndcdn.com/artworks-ihZ9ZU5QOCqz2Dce-ykEwkQ-t240x240.jpg',
  },
  {
    label: 'Top 50 ',
    image: 'https://i1.sndcdn.com/artworks-000436845846-zk0vwi-t240x240.jpg',
  },
  {
    label: 'Akustik ',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Babyfaceplaylist.jpg/220px-Babyfaceplaylist.jpg',
  },
  {
    label: 'King Playlist ',
    image: 'https://i.scdn.co/image/ab67706f000000020cabd2450addea91294bf5ec',
  },
];
// const MY_PLAYLIST = [
//   {
//     imageUrl: 'https://example.com/playlist1.jpg',
//     name: 'Indie Vibes',
//     artist: 'Various Artists',
//   },
//   {
//     imageUrl: 'https://example.com/playlist2.jpg',
//     name: 'Chill Beats',
//     artist: 'Lo-Fi Beats',
//   },
//   {
//     imageUrl: 'https://example.com/playlist3.jpg',
//     name: 'Throwback Jams',
//     artist: 'Old School Legends',
//   },
//   {
//     imageUrl: 'https://example.com/playlist4.jpg',
//     name: 'Road Trip Tunes',
//     artist: 'On The Go Band',
//   },
//   {
//     imageUrl: 'https://example.com/playlist5.jpg',
//     name: 'Summer Hits',
//     artist: 'Various Artists',
//   },
//   {
//     imageUrl: 'https://example.com/playlist6.jpg',
//     name: 'Party Anthems',
//     artist: 'DJ MixMaster',
//   },
//   {
//     imageUrl: 'https://example.com/playlist7.jpg',
//     name: 'Relaxing Piano',
//     artist: 'Piano Maestro',
//   },
//   {
//     imageUrl: 'https://example.com/playlist8.jpg',
//     name: 'Rock Classics',
//     artist: 'Legendary Rockers',
//   },
//   {
//     imageUrl: 'https://example.com/playlist9.jpg',
//     name: 'R&B Grooves',
//     artist: 'Soulful Singers',
//   },
//   {
//     imageUrl: 'https://example.com/playlist10.jpg',
//     name: 'EDM Extravaganza',
//     artist: 'Electronic Producers',
//   },
// ];

export const SearchPage = () => {
  const loginLink = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  const [token, setToken] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        params: {
          q: searchQuery,
          type: 'track',
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSearchResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error searching for songs:', error);
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    console.log('hash ', hash);

    if (!token && hash) {
      token = hash
        .substring(1) // hapus #
        .split('&') // pisah dari & jadi array
        .find((elem) => elem.startsWith('access_token')) // cari key nya yang access_token
        .split('=')[1]; // ambil nilai access_token index ke 1

      window.location = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const getProfileData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    getProfileData();
  }, [token]);
  return (
    <>
      <div className="flex  ">
        <Sidebar />
        <div className="w-[75%] max-h-screen overflow-y-scroll px-5">
          <div className="w-full py-3 px-5 bg-gradient-to-r from-[#164432] to-[#121715] h-fit my-5  rounded">
            <div className="flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <div className="bg-[#0E251B] rounded-full w-fit ">
                  <MdOutlineNavigateBefore size={35} />
                  {''}
                </div>
                <div className="bg-[#0E251B] rounded-full w-fit ">
                  <MdOutlineNavigateNext size={35} />
                  {''}
                </div>
                <div className="flex items-center gap-3">
                  <form onSubmit={handleSearch}>
                    <input
                      placeholder="Cari"
                      className="text-black rounded-full"
                      type="text"
                      value={searchQuery}
                      onChange={handleChange}
                    />
                    <button type="submit" className="bg-[#0E251B] p-2 rounded">
                      Cari
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={logout}
                  className="bg-black/90 flex items-center gap-1 text-white font-semibold p-3 rounded-full hover:scale-105"
                >
                  <MdOutlineDownloadForOffline size={20} />
                  Install Spotify
                </button>
                {!token ? (
                  <button
                    onClick={() => {
                      window.location = loginLink;
                    }}
                    className="bg-white text-black font-semibold p-3 rounded-full hover:scale-105"
                  >
                    Login
                  </button>
                ) : (
                  <Dropdown
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '999px',
                    }}
                    label={`Welcome ${profileData.display_name}`}
                  >
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                  </Dropdown>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold my-5">Search Song</h1>
            </div>
          </div>
          <div className="py-3 px-5">
            <h1 className="text-xl font-bold">Jump Back In</h1>
            <div className="grid grid-cols-5 gap-3">
              {searchResults.length == 0 ? (
                <div className="mt-10 text-center col-span-5">No Songs</div>
              ) : (
                searchResults.map((item, index) => {
                  return (
                    <SquarePlaylist
                      name={item.name}
                      image={item.album.images[0].url}
                      artist={item.artist}
                      key={index}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
