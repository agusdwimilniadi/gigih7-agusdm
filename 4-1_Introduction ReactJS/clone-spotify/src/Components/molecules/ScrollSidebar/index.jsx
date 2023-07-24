import { ScrollSidebarItem } from '../../atoms/ScrollSidebarItem';

const ITEM_SCROLL = [
  {
    name: 'Playlist',
  },
  {
    name: 'Artist',
  },
  {
    name: 'Albums',
  },
  {
    name: 'Podcast and Show',
  },
];
export const ScrollSidebar = () => {
  return (
    <div className="overflow-x-scroll p-3 no-scrollbar flex items-center line-clamp-1 gap-2">
      {ITEM_SCROLL.map((item, index) => {
        return <ScrollSidebarItem label={item.name} key={index} />;
      })}
    </div>
  );
};
