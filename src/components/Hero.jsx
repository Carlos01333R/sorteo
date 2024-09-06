/* eslint-disable react/prop-types */
export default function Hero({ nombre, imagen, description }) {
  return (
    <section className="w-full md:max-w-[1300px] h-auto flex  items-center justify-center gap-2  m-auto relative -top-6 rounded-lg ">
      <div className="w-[50%] ml-2">
        <h2 className="font-raleway-black text-2xl ">{nombre}</h2>
        <p className="mt-2 ">{description}</p>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img className="rounded-lg" src={imagen} alt="imagen" />
      </div>
    </section>
  );
}
