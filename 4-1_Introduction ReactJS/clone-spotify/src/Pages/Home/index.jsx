import { Sidebar } from '../../Components/molecules/Sidebar';
import {
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
  MdOutlineDownloadForOffline,
} from 'react-icons/md';
import { BsPlayFill } from 'react-icons/bs';
import { PlaylistTypeItem } from '../../Components/atoms/PlaylistTypeItem';
import { SquarePlaylist } from '../../Components/atoms/SquarePlaylist';

export const HomePage = () => {
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
  const MY_PLAYLIST = [
    {
      imageUrl: 'https://example.com/playlist1.jpg',
      name: 'Indie Vibes',
      artist: 'Various Artists',
    },
    {
      imageUrl: 'https://example.com/playlist2.jpg',
      name: 'Chill Beats',
      artist: 'Lo-Fi Beats',
    },
    {
      imageUrl: 'https://example.com/playlist3.jpg',
      name: 'Throwback Jams',
      artist: 'Old School Legends',
    },
    {
      imageUrl: 'https://example.com/playlist4.jpg',
      name: 'Road Trip Tunes',
      artist: 'On The Go Band',
    },
    {
      imageUrl: 'https://example.com/playlist5.jpg',
      name: 'Summer Hits',
      artist: 'Various Artists',
    },
    {
      imageUrl: 'https://example.com/playlist6.jpg',
      name: 'Party Anthems',
      artist: 'DJ MixMaster',
    },
    {
      imageUrl: 'https://example.com/playlist7.jpg',
      name: 'Relaxing Piano',
      artist: 'Piano Maestro',
    },
    {
      imageUrl: 'https://example.com/playlist8.jpg',
      name: 'Rock Classics',
      artist: 'Legendary Rockers',
    },
    {
      imageUrl: 'https://example.com/playlist9.jpg',
      name: 'R&B Grooves',
      artist: 'Soulful Singers',
    },
    {
      imageUrl: 'https://example.com/playlist10.jpg',
      name: 'EDM Extravaganza',
      artist: 'Electronic Producers',
    },
  ];

  return (
    <>
      <div className="flex  ">
        <Sidebar />
        <div className="w-[75%] max-h-screen overflow-y-scroll px-5">
          <div className="w-full py-3 px-5 bg-gradient-to-r from-[#164432] to-[#121715] h-fit my-5  rounded">
            <div className="flex items-center justify-between">
              <div className="flex gap-5">
                <div className="bg-[#0E251B] rounded-full w-fit ">
                  <MdOutlineNavigateBefore size={35} />
                  {''}
                </div>
                <div className="bg-[#0E251B] rounded-full w-fit ">
                  <MdOutlineNavigateNext size={35} />
                  {''}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-white text-black font-semibold p-3 rounded-full hover:scale-105">
                  Explore Premium
                </button>
                <button className="bg-black/90 flex items-center gap-1 text-white font-semibold p-3 rounded-full hover:scale-105">
                  <MdOutlineDownloadForOffline size={20} />
                  Install App
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold my-5">Good Evening</h1>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3">
                {DATA_PLAYLIST.map((item, index) => {
                  return (
                    <PlaylistTypeItem
                      label={item.label}
                      image={item.image}
                      key={index}
                      icon={<BsPlayFill size={30} />}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="py-3 px-5">
            <h1 className="text-xl font-bold">Jump Back In</h1>
            <div className="grid grid-cols-5 gap-3">
              {MY_PLAYLIST.map((item, index) => {
                return (
                  <SquarePlaylist
                    name={item.name}
                    artist={item.artist}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
