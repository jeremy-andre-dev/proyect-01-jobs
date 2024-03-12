import { MdOutlinePets } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

import SearchBar from "./SearchBarNav/SearchBar";
import MenuNavBar from "./MenuNav/MenuNavBar";

const NavBar = () => {
  return (
    <div className="flex w-full  max-w-[120rem] flex-col ">
      <div className="flex h-[4rem] w-full justify-between px-2 md:mt-2 md:px-6">
        {/* Left */}
        <div className="hidden items-center justify-start md:visible md:flex  md:w-[40%]">
          <SearchBar />
        </div>

        {/* Center */}
        <div className="flex items-center justify-center gap-2  md:w-[30%]">
          <MdOutlinePets />
          <div className="flex items-center gap-1 ">
            <div className="text-[1.5rem]">Pets</div>
            <div className="mt-[0.3rem] text-[1rem] text-gray-800">at</div>
            <div className="text-[1.5rem]">care</div>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end gap-4 md:w-[40%] md:gap-6 ">
          <div className="flex gap-3">
            <VscAccount className="text-[1.75rem] text-gray-700 " />
          </div>
          <MenuNavBar />
        </div>
      </div>
      <div className="mx-2 mb-[1.5rem] mt-[0.5rem] border-t border-gray-200 md:mx-6"></div>
    </div>
  );
};

export default NavBar;
