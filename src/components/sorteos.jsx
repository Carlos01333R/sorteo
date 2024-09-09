import ApiSorteo from "../hook/Apisorteo";
import Spliner from "./Spliner";
import { Link } from "react-router-dom";

export default function Sorteos() {
  const { sorteos, loading } = ApiSorteo();

  // Función para formatear a pesos colombianos
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {loading && (
        <section className="w-full justify-center items-center m-auto mb-40">
          <Spliner title="Sorteos" />
        </section>
      )}
      <section className="w-full h-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2 md:max-w-[1300px] m-auto mb-32">
        {!loading &&
          sorteos.map((sorteo) => (
            <article
              key={sorteo.id}
              className="flex flex-col justify-between items-center w-full md:w-[550px] h-[550px] mt-10 shadow-xl m-auto"
            >
              <div className="w-full h-12 bg-[#2E3844] flex justify-center items-center">
                <h2 className="w-[90%] text-white">No Edición {sorteo.id}</h2>
              </div>
              <div className="w-full">
                <img src={sorteo.imagen} alt="imagen" />
              </div>
              <div className="flex w-[90%] justify-between items-center">
                <p className="mt-2 w-[40%] font-raleway-black text-xl">
                  {sorteo.nombre}
                </p>
                <p className="font-raleway-black text-lg mt-2">
                  {sorteo.boletos} Boletos
                </p>
              </div>
              <div className="flex w-[90%] justify-between items-center">
                <p className="mt-2">Con valor de:</p>
                <p className="font-raleway-black text-lg mt-2">
                  {formatCurrency(sorteo.valor)}
                </p>
              </div>
              <div className="flex w-[90%] justify-between items-center mb-2">
                <section>
                  <p className="mt-2">Precio del Boleto</p>
                  <p className="font-raleway-black text-lg">
                    {formatCurrency(sorteo.precio)}
                  </p>
                </section>
                <Link to={`/sorteo/${sorteo.id}`}>
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
