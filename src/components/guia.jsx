import { Button } from "@nextui-org/react";
import IconPlay from "./icon/IconPlay";
import { useDisclosure } from "@nextui-org/react";
import ModalVideo from "./ModalVideo";
import IconMovie from "./icon/IconMovie";
import { Link } from "react-router-dom";

export default function Guia() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-2 md:max-w-[1300px] m-auto mb-14">
        <div className="w-[95%] h-[300px] md:h-[400px] md:w-[55%] flex justify-center items-center">
          <article className="w-full md:w-[90%]  flex flex-col gap-2">
            <div className="flex gap-2">
              <IconMovie />
              <p className="text-4xl font-raleway-black text-gray-500">
                Video de la guía
              </p>
            </div>
            <div className="ml-2">
              <p>Descarga el video o mira la guía</p>
              <p className="mt-2">
                Vea el video de la guía para ver cómo jugar el sorteo online,
                cómo pagar y cómo recibir tus numeros. ¡Disfruta de la
                experiencia de sorteo en línea!
              </p>
              <Link to="/comoJugar">
                <button className="bg-[#2E3844] text-white p-2 rounded-lg py-3 px-5 mt-5 w-[150px] hover:bg-[#414b57] hover:scale-105 transition-all duration-300">
                  Como jugar
                </button>
              </Link>
            </div>
          </article>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://www.easypromosapp.com/blog/wp-content/uploads/xxss-consejos-para-hacer-un-sorteo-video-instagram.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[95%] h-[300px] md:h-[400px] md:w-[45%] flex justify-center items-center rounded-lg"
        >
          <Button
            onPress={onOpen}
            className="w-20 h-20 rounded-full bg-white hover:bg-blue-500 transition-colors duration-200 flex justify-center items-center"
          >
            <IconPlay />
          </Button>
        </div>
      </section>
      <ModalVideo isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
