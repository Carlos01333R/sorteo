import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-center items-center z-50  m-auto ">
        <nav
          className={`font-raleway-medium text-sm md:text-normal w-full md:max-w-[1300px] flex justify-between  truncate  border-2 border-gray-200 rounded-xl p-1 py-3 transition-all duration-300 text-black m-auto z-50 ${
            isScrolled ? "bg-[#2E3844] backdrop-blur-md text-white" : ""
          }`}
        >
          <Link to="/">
            <img src="" alt="Logo" />
          </Link>

          <ul className="flex items-center gap-x-3 md:gap-x-5 justify-center ml-5 mr-5">
            <li className="flex items-center gap-x-2 ">
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center gap-x-2">
              <a href="#proyect">Como jugar</a>
            </li>
            <li className="flex items-center gap-x-2">
              <a href="#sobreMi">Sorteos activos</a>
            </li>
            <li className="flex items-center gap-x-2">
              <a href="#sobreMi">Contacto</a>
            </li>
            <li className="flex items-center gap-x-2">
              <a href="#sobreMi">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
