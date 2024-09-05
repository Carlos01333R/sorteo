// src/pages/SorteoDetal.js
import Raffle from "../components/Raffe";
import { useParams } from "react-router-dom";
import ApiSorteo from "../hook/Apisorteo";

export default function SorteoDetal() {
  const { sorteos } = ApiSorteo();
  const { id } = useParams();

  // Asegúrate de convertir 'id' a un número si los IDs de 'sorteos' son números
  const FIlterIdSorteo = sorteos.filter((sorteo) => sorteo.id === Number(id));
  console.log(FIlterIdSorteo);

  // Verifica si se encontró el sorteo
  if (FIlterIdSorteo.length === 0) {
    return <p>No se encontró el sorteo con el ID proporcionado.</p>;
  }

  // Dado que estás filtrando, FIlterIdSorteo es un array, toma el primer elemento
  const sorteo = FIlterIdSorteo[0];

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center gap-2">
      {/* Asegúrate de que el precio exista antes de pasarlo al componente */}
      <Raffle price={sorteo.precio} nombre={sorteo.nombre} />
    </section>
  );
}
