import { Carousel } from "flowbite-react";
import ApiSorteo from "../hook/Apisorteo";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Spliner from "./Spliner";

export function Carrusel() {
  const { sorteos, loading } = ApiSorteo();

  return (
    <div className="md:h-[500px]  h-[300px] relative -top-5 md:-top-7 w-full md:max-w-[1350px] m-auto">
      {loading && (
        <section className="w-full justify-center items-center m-auto mb-40">
          <Spliner title="Slider" />
        </section>
      )}
      <Carousel className="rounded-lg overflow-hidden">
        {sorteos.map((sorteo) => (
          <div
            key={sorteo.id}
            style={{
              backgroundImage: "url(/slider.jpg)",
              maskImage: "linear-gradient(to bottom, black, rgba(0, 0, 1, 1))",
            }}
            className="flex h-full items-center justify-center bg-cover bg-center w-full"
          >
            <section className="flex w-[70%] flex-col text-white ">
              <h1 className="text-3xl md:text-5xl font-raleway-black mb-3">
                Gana con nosotros
              </h1>
              <p className="text-lg font-raleway-medium mb-2">
                {" "}
                {sorteo.nombre}
              </p>
              <p className="text-2xl font-raleway-black mb-3 md:mb-5 ">
                Sorteo el {sorteo.fecha}
              </p>
              <Link to={`/sorteo/${sorteo.id}`}>
                <Button className="bg-[#2E3844] text-white p-2 rounded-lg w-[150px]">
                  Comprar
                </Button>
              </Link>
            </section>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
