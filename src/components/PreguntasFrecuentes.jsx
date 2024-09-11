import Header from "./Header";
import Footer from "./Footer";
import { Image } from "@nextui-org/react";
import { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function PreguntasFrecuentes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ComoJugar =
    "Para participar en un sorteo, simplemente selecciona el sorteo en el que deseas participar y sigue los pasos indicados en la página del sorteo segue los pasos específicos como completar un formulario o realizar la compra. Asegúrate de leer las reglas y términos del sorteo antes de participar.";

  const seguridad =
    "Sí, todos nuestros sorteos están diseñados para ser justos y transparentes. Utilizamos sistemas de seguridad avanzados para proteger tu información personal y asegurarnos de que todos los sorteos se realicen de manera legítima. Te recomendamos siempre revisar las políticas de privacidad y términos del sorteo antes de participar.";

  const ganador =
    "El ganador del sorteo se elige de manera aleatoria utilizando un sistema automatizado que garantiza imparcialidad y transparencia. Todos los participantes tienen las mismas oportunidades de ganar, y los resultados se publican en la página del sorteo una vez finalizado. Los ganadores serán notificados por correo electrónico o a través del método de contacto proporcionado durante la inscripción.";

  return (
    <>
      <header className="w-full mb-14">
        <Header />
      </header>
      <main className="w-full flex flex-col justify-center items-center m-auto mb-20">
        <section className="w-[95%] md:w-[80%]">
          <div className="w-full flex flex-col justify-center items-center gap-5 mt-5 mb-5">
            <Image className="w-20 h-20" src="/sorteo.png" alt="preguntas" />
            <h1 className="font-raleway-black text-3xl ">
              Preguntas frecuentes
            </h1>
          </div>

          <Accordion defaultExpandedKeys={["2"]}>
            <AccordionItem
              key="1"
              aria-label="¿Cómo puedo participar en un sorteo?"
              subtitle="preciona para expandir"
              title="¿Cómo puedo participar en un sorteo?"
            >
              {ComoJugar}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              subtitle="preciona para expandir"
              title="¿Es seguro participar en los sorteos?"
            >
              {seguridad}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              subtitle="preciona para expandir"
              title="¿Cómo se elige al ganador de un sorteo?"
            >
              {ganador}
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
