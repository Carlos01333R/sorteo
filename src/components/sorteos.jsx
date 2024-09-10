import ApiSorteo from "../hook/Apisorteo";
import Spliner from "./Spliner";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

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

      {!loading && (
        <section className="w-full flex justify-center items-center mb-6">
          <img
            className="w-32 h-32 object-cover"
            src="/sorteo.png"
            alt="imagen"
          />
        </section>
      )}
      <article className="w-full flex justify-center items-center">
        <div className="w-full grid grid-cols-1 gap-3 p-4 md:grid-cols-3 justify-items-center">
          {!loading &&
            sorteos.map((sorteo) => (
              <div
                key={sorteo.id}
                className="max-w-md overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl rounded-lg"
              >
                <div className="bg-black bg-opacity-60 p-6">
                  <h2 className="text-2xl font-bold">
                    Edición Sorteo {sorteo.id}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      alt="BMW Motorcycle"
                      className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                      height="200"
                      src={sorteo.imagen}
                      style={{
                        aspectRatio: "400/200",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-2xl font-bold truncate">
                        {sorteo.nombre}
                      </h3>
                    </div>
                  </div>
                  <div className="mb-4 flex justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Valor Total</p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(sorteo.valor)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Boletos</p>
                      <p className="text-2xl font-bold">{sorteo.boletos}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-400">Precio por Boleto</p>
                    <p className="text-3xl font-bold text-yellow-400">
                      {formatCurrency(sorteo.precio)}
                    </p>
                  </div>
                </div>
                <div className="bg-black bg-opacity-60 p-6">
                  <Link to={`/sorteo/${sorteo.id}`}>
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                      Comprar Ahora
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </article>
    </>
  );
}
