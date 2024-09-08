import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowHamburgers from "./icon/showHamburgers";
import Lesshamburger from "./icon/Lesshamburger";
import Next from "./icon/IconNext";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
      <header className="fixed top-0 left-0 w-full flex justify-center items-center z-50 m-auto">
        <nav
          className={`font-raleway-medium text-sm md:text-normal w-full md:max-w-[1350px] flex justify-between truncate border-2 border-gray-200 rounded-xl p-1 py-3 transition-all duration-300 text-black m-auto z-50 ${
            isScrolled ? "bg-[#2E3844] backdrop-blur-md text-white" : ""
          } ${showMenu ? "hidden md:block" : ""}`}
        >
          <Link to="/">
            <img src="" alt="Logo" />
          </Link>

          <ul className="flex gap-x-3 md:gap-x-5 justify-center items-center ml-5 mr-5">
            <li className="gap-x-2 hidden md:block">
              <Link to="/">Home</Link>
            </li>
            <li className="hidden md:block gap-x-2">
              <Link to="/comoJugar">Como jugar</Link>
            </li>
            <li className="hidden md:block gap-x-2">
              <a href="#sobreMi">Sorteos activos</a>
            </li>
            <li className="hidden md:block gap-x-2">
              <a href="#sobreMi">Contacto</a>
            </li>
            <li className="hidden md:block gap-x-2">
              <a
                target="_blank"
                className="flex justify-center items-center border-2 border-[rgb(255,255,255)] rounded-lg px-2 cursor-pointer hover:scale-105 transition-transform duration-300 gap-1"
                href="https://dashboard-sorteo.vercel.app/dashboard"
              >
                Login <Next width={20} height={20} />
              </a>
            </li>
            <li className="block md:hidden">
              <button
                className={`text-[#2E3844] ${isScrolled ? "text-[#fff]" : ""}`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <ShowHamburgers />
              </button>
            </li>
          </ul>
        </nav>

        <section
          className={`fixed top-0 right-0 z-50 w-[65%] h-screen bg-[#2E3844] flex flex-col transition-transform duration-500 ease-in-out transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-end items-end">
            <button
              className="text-[#fff] py-5 px-3"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Lesshamburger width={30} height={30} />
            </button>
          </div>
          <section className="text-white flex flex-col justify-center items-center gap-2 p-5 mt-5">
            <Link to="/">
              <img src="" alt="Logo" />
            </Link>

            <ul className="flex flex-col justify-start items-start gap-5 mt-5">
              <li className="gap-x-2 ">
                <Link to="/">Home</Link>
              </li>
              <li className=" gap-x-2">
                <Link to="/comoJugar">Como jugar</Link>
              </li>
              <li className=" gap-x-2">
                <a href="#sobreMi">Sorteos activos</a>
              </li>
              <li className=" gap-x-2">
                <a href="#sobreMi">Contacto</a>
              </li>
              <li className=" gap-x-2">
                <a
                  target="_blank"
                  className="flex justify-center items-center border-2 border-[#fff] rounded-lg p-2 cursor-pointer hover:scale-105 transition-all duration-300 gap-1"
                  href="https://dashboard-sorteo.vercel.app/dashboard"
                >
                  Login <Next width={20} height={20} />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </header>
    </>
  );
}
