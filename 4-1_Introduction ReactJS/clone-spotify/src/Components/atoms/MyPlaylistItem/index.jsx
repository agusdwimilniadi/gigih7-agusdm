import { AiTwotonePushpin } from 'react-icons/ai';

export const MyPlaylistItem = ({ isPinned }) => {
  return (
    <a href="#" className="hover:bg-secondary p-2 block rounded transition-all">
      <div className="flex gap-4">
        <img
          src="https://img.freepik.com/premium-vector/favourite-playlist-icon-songs-music-player-playlist-logo-vector-ui-icon-neumorphic-ui-ux-white-user-interface-web-button_399089-2894.jpg?w=2000"
          alt="playlist-thumbnail"
          className="w-[50px] h-[50px] rounded-md"
        />
        <div>
          <p className="font-medium">Liked Song</p>
          <p className="font-light text-textSecondary flex items-center gap-1">
            {isPinned ? <AiTwotonePushpin color="#1BD760" /> : null}
            Playlist
          </p>
        </div>
      </div>
    </a>
  );
};
