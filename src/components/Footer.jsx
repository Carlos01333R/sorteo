import { Link } from "react-router-dom";
import IconFacebook from "./icon/IconFacebook";
import IconInstagram from "./icon/IconInstagram";
import IconLink from "./icon/IconLink";
import Shapedividers from "./icon/IconShapedividers";

export default function Footer() {
  return (
    <>
      {" "}
      <section className="rotate-180 w-full relative top-2">
        <Shapedividers />
      </section>
      <footer className="w-full  h-auto   m-auto bg-[#2E3844]  text-white z-40">
        <article className="flex flex-col md:flex-row w-full md:max-w-[1300px]  items-center justify-between gap-2 m-auto">
          <section className="flex ml-5 mt-4">
            <img src="" alt="logo" />
          </section>
          <section className="flex w-[90%] md:w-[50%] mt-5 mb-5 ">
            <p>
              ¡Bienvenido a Sorteos online, tu plataforma de confianza para
              participar en los mejores sorteos y rifas en línea! Aquí, cada
              boleto es una oportunidad para ganar premios increíbles. Nuestra
              misión es brindarte una experiencia segura, transparente y
              emocionante, donde la suerte puede estar de tu lado. !
            </p>
          </section>
          <section className=" mt-5 mb-5 mr-5">
            <ul className="flex gap-2 underline ">
              <li className="gap-x-2 ">
                <Link to="/">Home</Link>
              </li>
              <li className=" gap-x-2">
                <a href="#proyect">Como jugar</a>
              </li>
              <li className=" gap-x-2">
                <a href="#sobreMi">Sorteos activos</a>
              </li>
              <li className=" gap-x-2">
                <a href="#sobreMi">Contacto</a>
              </li>
            </ul>
            <section className="flex gap-5 w-full justify-center items-center mt-5">
              <a href="https://www.facebook.com/" target="_blank">
                <IconFacebook />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <IconInstagram />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <IconLink />
              </a>
            </section>
          </section>
        </article>
      </footer>
    </>
  );
}
