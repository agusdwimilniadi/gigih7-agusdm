import { MyPlaylistItem } from '../../atoms/MyPlaylistItem';
export const MyPlaylist = () => {
  return (
    <div className="h-[50vh] no-scrollbar overflow-y-scroll">
      <MyPlaylistItem isPinned />
      <MyPlaylistItem isPinned />
      <MyPlaylistItem />
      <MyPlaylistItem />
      <MyPlaylistItem />
      <MyPlaylistItem />
    </div>
  );
};
