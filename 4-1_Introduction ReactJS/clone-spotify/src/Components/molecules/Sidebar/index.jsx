import { SidebarItem } from '../../atoms/SidebarItem';
import { GoHomeFill, GoSearch } from 'react-icons/go';
import { LuLibrary } from 'react-icons/lu';
import { ScrollSidebar } from '../ScrollSidebar';
import { MyPlaylist } from '../MyPlaylist';

export const Sidebar = () => {
  return (
    <div className="w-[25%] h-screen overflow-hidden">
      <div className="flex my-5 flex-col bg-[#121212] p-4 mx-4 rounded  gap-5">
        <SidebarItem isActive label={'Home'} icons={<GoHomeFill size={30} />} />
        <SidebarItem label={'Search'} icons={<GoSearch size={30} />} />
      </div>
      <div className="flex my-5 flex-col bg-[#121212] p-4 mx-4 rounded  gap-5">
        <SidebarItem
          isActive
          isLibrary
          label={'Your Library'}
          icons={<LuLibrary size={30} />}
        />
        <ScrollSidebar />
        <MyPlaylist />
      </div>
    </div>
  );
};
