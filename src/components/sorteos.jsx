import ApiSorteo from "../hook/Apisorteo";
import { Link } from "react-router-dom";

export default function Sorteos() {
  const { sorteos } = ApiSorteo();
  return (
    <>
      <section className="w-full h-auto flex flex-col md:flex-row  items-center justify-center gap-2">
        {sorteos.map((sorteo) => (
          <article
            key={sorteo.id}
            className="flex flex-col justify-between items-center  w-full md:w-[500px] h-[550px]  mt-10 shadow-xl"
          >
            <div className="w-full h-12 bg-[#2E3844] flex justify-center items-center">
              <h2 className="w-[90%] text-white">No Edicion {sorteo.id}</h2>
            </div>
            <div className="w-full">
              <img src={sorteo.imagen} alt="imagen" />
            </div>
            <div className="flex w-[90%] justify-between items-center ">
              <p className="mt-2 w-[40%] font-raleway-black text-xl">
                {sorteo.nombre}
              </p>
              <p className="font-raleway-black text-lg mt-2">
                {sorteo.boletos} Boletos
              </p>
            </div>
            <div className="flex w-[90%] justify-between items-center ">
              <p className="mt-2 ">Con valor de: </p>
              <p className="font-raleway-black text-lg mt-2">
                {sorteo.valor} COP
              </p>
            </div>
            <div className="flex w-[90%] justify-between items-center mb-2">
              <section>
                <p className="mt-2 ">Precio del Boleto</p>
                {sorteo.precio}
              </section>
              <Link to={`/sorteoDetal/${sorteo.id}`}>
                <button className="mt-2 bg-[#2E3844] text-white p-2 rounded-lg">
                  Comprar
                </button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
