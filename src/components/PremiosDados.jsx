import { Image } from "@nextui-org/react";
export default function PremiosDados() {
  const bentoItems = [
    {
      id: 1,
      src: "https://www.carroya.com/noticias/sites/default/files/motos_nuevas_cali_carro_ya.webp",
      alt: "Moto 360",
      descripcion:
        "Moto 360 de la marca Moto, una marca de motos de bajo costo",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/564x/8e/49/fd/8e49fdbab57d5b7b55e7706757cf7845.jpg",
      alt: "Carro 0 km",
      descripcion:
        "Carro 0 km de la marca Carro, una marca de carros de bajo costo",
    },
    {
      id: 3,
      src: "https://www.shutterstock.com/image-illustration/3d-golden-20-million-isolated-260nw-2225708413.jpg",
      alt: "20 Millones",
      descripcion:
        "20 Millones de la marca Golden, una marca de motos de bajo costo",
    },
    {
      id: 4,
      src: "https://tecnoimportaciones.com/wp-content/uploads/2021/05/Apple-13.3-MacBook-Pro-M1.jpg",
      alt: "macbook pro",
      descripcion: "macbook pro de la marca Apple, una marca de computadoras",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-3xl font-raleway-black text-center text-black mb-12">
          Premios Entregados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center"
            >
              <div className="m-auto">
                <Image
                  src={item.src}
                  alt="Premio a la Excelencia"
                  layout="fill"
                  objectFit="cover"
                  className="h-44 w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-raleway-black text-center mb-4 mt-2 ">
                  {item.alt}
                </h3>
                <p className="text-gray-600 text-center">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
