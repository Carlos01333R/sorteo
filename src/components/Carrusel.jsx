import { Carousel } from "flowbite-react";
import ApiSorteo from "../hook/Apisorteo";

export function Carrusel() {
  const { sorteos } = ApiSorteo();

  return (
    <div className="h-[500px] sm:h-64 xl:h-80 2xl:h-96 relative -top-5 md:-top-7 w-full md:max-w-[1350px] m-auto">
      <Carousel className="rounded-lg overflow-hidden">
        {sorteos.map((sorteo) => (
          <div
            key={sorteo.id}
            style={{
              backgroundImage: "url(/slider.jpg)",
            }}
            className="flex h-full items-center justify-center bg-cover bg-center w-full"
          >
            <p className="text-white font-bold bg-black/50 p-4 rounded-lg">
              {sorteo.nombre || "item 1"}{" "}
              {/* Asegúrate de mostrar algo relevante */}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
