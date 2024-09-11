/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Time({ time, numero }) {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    // Función para calcular el tiempo restante
    const calculateTimeLeft = () => {
      const targetDate = new Date(time);
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeRemaining("El sorteo ha finalizado");
      }
    };

    // Actualiza el tiempo restante cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-10 mb-10">
      <p className="font-raleway-black text-3xl text-center">
        Tiempo restante para el sorteo
      </p>
      <h1 className="text-2xl md:text-4xl font-raleway-black text-white bg-[#2E3844] rounded-full w-[90%]  md:w-full flex justify-center items-center py-4">
        {timeRemaining}
      </h1>

      {timeRemaining === "El sorteo ha finalizado" && numero !== null ? (
        <section className="flex flex-col justify-center items-center ">
          <p className="text-center">
            El Numero ganador es:{" "}
            <span className="text-2xl font-raleway-black">{numero}</span>
          </p>
          <p className="text-center">EL ganadar sera contactado por email.</p>
        </section>
      ) : null}
    </div>
  );
}
