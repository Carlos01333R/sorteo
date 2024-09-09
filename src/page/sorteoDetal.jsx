// src/pages/SorteoDetal.js
import Raffle from "../components/Raffe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Time from "../components/time";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ApiSorteo from "../hook/Apisorteo";
import Spliner from "../components/Spliner";

export default function SorteoDetal() {
  const { sorteos } = ApiSorteo();
  const { id } = useParams();

  // Asegúrate de convertir 'id' a un número si los IDs de 'sorteos' son números
  const FIlterIdSorteo = sorteos.filter((sorteo) => sorteo.id === Number(id));

  // Verifica si se encontró el sorteo
  if (FIlterIdSorteo.length === 0) {
    return (
      <section className="mt-10">
        <Spliner title="El sorteo" />
      </section>
    );
  }

  // Dado que estás filtrando, FIlterIdSorteo es un array, toma el primer elemento
  const sorteo = FIlterIdSorteo[0];

  // Convertir sorteo.fecha a un objeto Date
  const sorteoFecha = new Date(sorteo.fecha);
  const fechaActual = new Date(); // Fecha actual

  return (
    <>
      <header className="w-full mb-20">
        <Header />
      </header>
      <main className="w-full">
        <section className="w-full h-auto flex flex-col items-center justify-center gap-2">
          <Hero
            nombre={sorteo.nombre}
            imagen={sorteo.imagen}
            description={sorteo.description}
          />

          {sorteo && (
            <Time time={sorteo.fecha} numero={sorteo.numero_ganador} />
          )}

          {/* Mostrar <Raffle> solo si la fecha actual es menor o igual a la fecha del sorteo */}
          {fechaActual <= sorteoFecha && (
            <Raffle
              price={sorteo.precio}
              nombre={sorteo.nombre}
              imagen={sorteo.imagen}
              description={sorteo.description}
              boletos={sorteo.boletos}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
