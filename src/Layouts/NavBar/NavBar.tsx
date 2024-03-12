import { MdOutlinePets } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex w-full  max-w-[120rem] flex-col ">
      <div className="flex h-[4rem] w-full justify-between px-2 md:px-4 ">
        {/* Left */}
        <div className="flex items-center justify-center ">Home</div>

        {/* Center */}
        <div className="flex items-center justify-center gap-2 ">
          <MdOutlinePets />
          <div className="flex items-center gap-1 ">
            <div className="text-[1.5rem]">Pets</div>
            <div className="mt-[0.25rem] text-[1rem] text-gray-800">at</div>
            <div className="text-[1.5rem]">care</div>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center ">Burger Bar</div>
      </div>
      <div className="mx-2 mb-[1.5rem] mt-[0.5rem] border-t border-gray-300 md:mx-4"></div>
    </div>
  );
};

export default NavBar;
