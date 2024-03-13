import { LuSearch } from "react-icons/lu";
import { ChangeEvent, FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para realizar la búsqueda
    console.log("Realizando búsqueda con término:", searchTerm);
  };

  return (
    <div className="flex-1 ">
      <form
        onSubmit={handleSearchSubmit}
        className="hidden h-[3rem] items-center gap-2 overflow-hidden rounded-full border px-4 md:visible md:flex"
      >
        <input
          type="text"
          placeholder="¿En qué estás interesado hoy? ..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full  py-2 focus:outline-none"
        />
        <div
          className="flex cursor-pointer items-center border-l-2 pr-1 pl-3"
          onClick={() =>
            alert(
              "Hey!, En estos momentos el desarrollador esta trabajando por integrar esta funcion espectacular para tu busqueda.",
            )
          }
        >
          <LuSearch className="text-[1.5rem] text-gray-500" />
        </div>
      </form>
      <LuSearch className="visible text-[1.5rem] text-gray-700 md:hidden" />
    </div>
  );
};

export default SearchBar;
