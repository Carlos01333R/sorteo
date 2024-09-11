import Header from "../components/Header";
import Footer from "../components/Footer";
import { Image } from "@nextui-org/react";
import { useEffect } from "react";

export default function ComoJugar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <main className="w-full md:max-w-[1000px] mt-20 mb-20 flex flex-col md:flex-row m-auto ">
        <section className="flex fle-col justify-center item-center m-auto ">
          <div className="flex flex-col w-full justify-center items-center gap-5 mt-10 ">
            <h1 className="font-raleway-black text-3xl">Paso 1</h1>
            <p className="font-raleway-black text-center  w-[300px]">
              Escoge el sorteo que quieres participar
            </p>
            <Image src="/paso1.png" alt="paso1" />
          </div>
        </section>
        <section className="flex justify-center item-center m-auto ">
          <div className="flex flex-col w-full justify-center items-center gap-5 mt-10">
            <h1 className="font-raleway-black text-3xl">Paso 2</h1>
            <p className="font-raleway-black text-center w-[300px]">
              Escoge el boleto o los boletos que quieres participar
            </p>
            <video src="/paso2.mp4" autoPlay loop poster="/paso1.png">
              Tu navegador no admite el elemento <code>video</code>.
            </video>
          </div>
        </section>
      </main>
      <section className="w-full md:max-w-[1000px] flex flex-col justify-center items-center  m-auto mt-10 mb-10">
        <h2 className="font-raleway-black text-3xl">Pasarela de pago:</h2>
        <img className="w-[450px] md:w-[500px]" src="epayco.png" alt="paso3" />
      </section>
      <Footer className="w-full">
        <Footer />
      </Footer>
    </>
  );
}
