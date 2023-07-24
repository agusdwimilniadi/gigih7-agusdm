import { Sidebar } from '../../Components/molecules/Sidebar';
import {
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
  MdOutlineDownloadForOffline,
} from 'react-icons/md';
import { BsPlayFill } from 'react-icons/bs';

export const HomePage = () => {
  return (
    <div className="flex  ">
      <Sidebar />
      <div className="w-full py-3 px-5 bg-gradient-to-r from-[#164432] to-[#121715] h-fit my-5 rounded">
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
            <a
              href="#"
              className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="playlist"
                  className="h-[80px] w-[80px] object-cover"
                />
                <h1 className="font-bold">Playlist Code</h1>
              </div>

              <a
                className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
                href="#"
              >
                <BsPlayFill size={30} />
              </a>
            </a>
            <a
              href="#"
              className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="playlist"
                  className="h-[80px] w-[80px] object-cover"
                />
                <h1 className="font-bold">Playlist Code</h1>
              </div>

              <a
                className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
                href="#"
              >
                <BsPlayFill size={30} />
              </a>
            </a>
            <a
              href="#"
              className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="playlist"
                  className="h-[80px] w-[80px] object-cover"
                />
                <h1 className="font-bold">Playlist Code</h1>
              </div>

              <a
                className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
                href="#"
              >
                <BsPlayFill size={30} />
              </a>
            </a>
            <a
              href="#"
              className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="playlist"
                  className="h-[80px] w-[80px] object-cover"
                />
                <h1 className="font-bold">Playlist Code</h1>
              </div>

              <a
                className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
                href="#"
              >
                <BsPlayFill size={30} />
              </a>
            </a>
            <a
              href="#"
              className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="playlist"
                  className="h-[80px] w-[80px] object-cover"
                />
                <h1 className="font-bold">Playlist Code</h1>
              </div>

              <a
                className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
                href="#"
              >
                <BsPlayFill size={30} />
              </a>
            </a>
            <a
              href="#"
              className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="playlist"
                  className="h-[80px] w-[80px] object-cover"
                />
                <h1 className="font-bold">Playlist Code</h1>
              </div>

              <a
                className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
                href="#"
              >
                <BsPlayFill size={30} />
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
