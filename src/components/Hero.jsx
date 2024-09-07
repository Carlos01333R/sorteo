/* eslint-disable react/prop-types */

export default function Hero({ nombre, imagen, description }) {
  return (
    <section className="w-full md:max-w-[1300px] h-auto flex md:flex-row flex-col  items-center justify-center gap-2  m-auto relative -top-3 md:-top-5 rounded-lg ">
      <div className="md:w-[50%] w-[90%] ml-2">
        <h2 className="font-raleway-black text-3xl md:text-4xl md:w-[70%]">
          {nombre}
        </h2>
        <p className="mt-2 ">{description}</p>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img className="rounded-lg" src={imagen} alt="imagen" />
      </div>
      <hr className="border-2 border-gray-200 w-[90%] mt-5 block md:hidden" />
    </section>
  );
}
