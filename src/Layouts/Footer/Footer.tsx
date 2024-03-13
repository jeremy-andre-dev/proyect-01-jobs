import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" w-full max-w-[120rem]">
      <ul className="flex w-full flex-col justify-between gap-4 px-2 py-4 text-[0.85rem] md:flex-row md:px-6">
        {/* <li>
          <a href="#">Política de envíos</a>
        </li> */}
        {/* <li>
          <a href="#">CAMBIOS Y DEVOLUCIONES</a>
        </li> */}
        {/* <li>
          <a href="#">Tallas</a>
        </li> */}
        {/* <li>
          <a href="#">Recomendaciones de cuidado</a>
        </li> */}
        {/* <li>
          <a href="#">Condiciones de compra</a>
        </li> */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          <li>
            <a href="#">Política de cookies</a>
          </li>
          <li>
            <a href="#">Política de privacidad</a>
          </li>
          <li>
            <a href="#">Términos de servicio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a className="flex gap-1" href="#">
              <span>Dev</span>
              <span>|</span>
              <span className="text-teal-800">Jeremy Andre</span>
            </a>
          </li>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          <li className="text-center">©2024. Reservados todos los derechos</li>
          <li>
            <a href="#">
              <IoLogoInstagram className="text-[1.5rem] " />
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
