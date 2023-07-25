export const PlaylistTypeItem = ({ icon, label, image }) => {
  return (
    <a
      href="#"
      className="flex group  items-center transition-all bg-white/20 justify-between gap-3"
    >
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt="playlist"
          className="h-[80px] w-[80px] object-cover"
        />
        <h1 className="font-bold">{label}</h1>
      </div>

      <a
        className="block w-fit opacity-0 transition-all  group-hover:opacity-100  hover:scale-105 shadow me-5 bg-[#07FE0F] text-black rounded-full p-3"
        href="#"
      >
        {icon}
      </a>
    </a>
  );
};
