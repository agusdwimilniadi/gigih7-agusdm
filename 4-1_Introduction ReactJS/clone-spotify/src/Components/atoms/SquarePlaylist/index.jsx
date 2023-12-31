import { BsPlayFill } from 'react-icons/bs';

export const SquarePlaylist = ({ name, artist, image }) => {
  return (
    <a href="#" className="p-5 group block bg-[#181818] rounded mt-3">
      <div className="relative">
        <img src={image} alt="alt" className="h-[150px] w-full object-cover" />
        <a
          className="block w-fit absolute bottom-0 right-0 opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow  bg-[#07FE0F] text-black rounded-full p-3"
          href="#"
        >
          <BsPlayFill size={20} />
        </a>
      </div>
      <h1 className="font-semibold mt-3 line-clamp-1 hover:line-clamp-none transition-all">
        {name}
      </h1>
      <p className="line-clamp-2 text-sm text-textSecondary my-2">{artist}</p>
    </a>
  );
};
