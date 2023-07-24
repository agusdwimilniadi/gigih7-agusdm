import { GoPlus } from 'react-icons/go';
import { MdNavigateNext } from 'react-icons/md';

export const SidebarItem = ({ label, icons, isActive, isLibrary }) => {
  return (
    <a
      href="#"
      className={`mx-5 ${
        isActive ? null : 'text-[#B3B3B3]'
      } hover:text-[#fff] transition-all`}
    >
      {isLibrary ? (
        <>
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-3 ">
              {icons}
              <p className="font-semibold text-xl">{label}</p>
            </div>
            <div className="flex">
              <span>
                <GoPlus size={30} />
              </span>
              <span>
                <MdNavigateNext size={30} />
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-row items-center gap-3 ">
          {icons}
          <p className="font-semibold text-xl">{label}</p>
        </div>
      )}
    </a>
  );
};
