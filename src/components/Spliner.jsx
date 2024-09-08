/* eslint-disable react/prop-types */
import { hourglass } from "ldrs";
export default function Spliner({ title }) {
  hourglass.register();
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2">
      <l-hourglass
        size="60"
        bg-opacity="0.1"
        speed="0.7"
        color="black"
      ></l-hourglass>
      <p>Cargando {title}...</p>
    </section>
  );
}
