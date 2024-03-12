import { LuMenu } from "react-icons/lu";

const MenuNavBar = () => {
  return (
    <div>
      <LuMenu
        className="text-[2rem] text-gray-700 cursor-pointer"
        onClick={() =>
          alert(
            "Hey!, En estos momentos el desarrollador esta trabajando por integrar esta funcion espectacular para tu busqueda.",
          )
        }
      />
    </div>
  );
};

export default MenuNavBar;
