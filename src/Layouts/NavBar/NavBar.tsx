import { MdOutlinePets } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

import SearchBar from "./SearchBarNav/SearchBar";
import MenuNavBar from "./MenuNav/MenuNavBar";

const NavBar = () => {
  return (
    <div className="flex w-full  max-w-[120rem] flex-col ">
      <div className="flex h-[4rem] w-full justify-between px-2 md:mt-2 md:px-6">
        {/* Left */}
        <div className="flex items-center justify-start gap-2  md:w-[30%] ">
          <MdOutlinePets className="text-[1.4rem] " />
          <div className="flex items-center gap-1 ">
            <div className="text-[1.5rem]">
              <span className="text-teal-500">Pets</span>
            </div>
            <div className="mt-[0.3rem] text-[1rem] text-gray-800">at</div>
            <div className="text-[1.5rem]">care</div>
          </div>
        </div>

        {/* Center */}
        <div className="hidden items-center justify-center md:visible md:flex  md:w-[40%]">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-4  md:w-[30%] md:gap-6 ">
          <div className="flex gap-3">
            <VscAccount className="text-[1.75rem] text-gray-700 " />
          </div>
          <MenuNavBar />
        </div>
      </div>
      <div className="border-[rgb(230,230,230)] mx-2 mb-[1.5rem] mt-[0.5rem] border-t md:mx-6"></div>
    </div>
  );
};

export default NavBar;
