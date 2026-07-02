import { Navlinks } from "@/app/assets";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ showNav, closeMenu }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";
  return (
    <div>
      {/* OverLay */}
      <div
        className={`fixed inset-0 transform transition-all right-0 duration-500 z-1002 bg-black opacity-70 w-full h-screen ${navOpen}`}
      ></div>
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-1003 right-0`}
      >
        {Navlinks.map((link) => (
          <a
            href={link.url}
            key={link.id}
            onClick={closeMenu}
            className="text-white w-fit text-xl ml-12 border-b-[1.5px] 
            pb-1 border-white sm:text-3xl"
          >
            {link.label}
          </a>
        ))}
        {/* Cross Icon */}
        <CgClose
          onClick={closeMenu}
          className="absolute top-5 cursor-pointer right-6 sm:w-8 sm:h-8 w-6 h-6 "
        />
      </div>
    </div>
  );
};

export default MobileNav;
