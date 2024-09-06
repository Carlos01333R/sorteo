/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import Preview from "./icon/IconPreview";
import Next from "./icon/IconNext";
import EpaycoCheckout from "./WebCheckout";
import Api from "../hook/Api";

const Raffle = ({ price, nombre, imagen, description }) => {
  const [selectedRaffles, setSelectedRaffles] = useState([]); // Estado para almacenar múltiples números seleccionados
  const { countries } = Api(); // Datos que vienen de la API
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const pageSize = 50; // Tamaño de cada página

  // Filtrar los números ocupados solo para el sorteo actual por `nombre_sorteo`
  const occupiedNumbers = countries
    .filter((country) => country.nombre_sorteo === nombre) // Filtrar por nombre del sorteo
    .flatMap((country) =>
      country.numero.split(",").map((num) => num.trim().padStart(3, "0"))
    ); // Convertir los números a formato de 3 dígitos, manejando múltiples números

  // Generar el array de números del 001 al 100, excluyendo los que ya están en occupiedNumbers
  const raffleNumbers = Array.from({ length: 100 }, (_, index) => {
    return String(index + 1).padStart(3, "0");
  }).filter((number) => !occupiedNumbers.includes(number)); // Excluir los números ocupados

  // Calcular los números a mostrar en la página actual
  const startIndex = (currentPage - 1) * pageSize;
  const currentNumbers = raffleNumbers.slice(startIndex, startIndex + pageSize);

  // Función para manejar la selección de números
  const handleSelectNumber = (number) => {
    setSelectedRaffles((prevSelected) => {
      if (prevSelected.includes(number)) {
        // Si el número ya está seleccionado, lo elimina
        return prevSelected.filter((raffle) => raffle !== number);
      } else {
        // Si no está seleccionado, lo agrega
        return [...prevSelected, number];
      }
    });
  };

  // Función para manejar el pago con los números seleccionados
  const handlePayment = () => {
    const epayco = window.ePayco;

    // Configuración de la transacción
    const data = {
      key: "58a0150cf636cce288eabb215dfb5fa8", // Tu public_key de Epayco
      name: nombre,
      description: selectedRaffles.join(", "), // Muestra los números seleccionados
      amount: price * selectedRaffles.length, // Calcula el monto total basado en la cantidad de números seleccionados
      currency: "COP",
      country: "CO",
      extra1: nombre,
      extra2: imagen,
      extra3: description,
      lang: "es",
      responseUrl: "https://sorteopy.vercel.app/response", // Agrega el nombre del sorteo aquí
      confirmationUrl: "https://sorteopy.vercel.app/response", // Cambiar a la URL de error correcta
      image: "http://yourwebsite.com/logo.png", // Opcional: agregar una imagen
    };

    epayco.checkout.configure({
      key: data.key,
      test: true,
    });

    epayco.checkout.open(data);
  };

  // Función para agregar un número aleatorio
  const handleAddRandomNumber = () => {
    // Filtrar solo los números disponibles que aún no están seleccionados
    const availableNumbers = raffleNumbers.filter(
      (number) => !selectedRaffles.includes(number)
    );
    if (availableNumbers.length > 0) {
      const randomNumber =
        availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
      handleSelectNumber(randomNumber);
    }
  };

  // Función para limpiar todos los números seleccionados
  const handleClearSelection = () => {
    setSelectedRaffles([]);
  };

  // Función para manejar la página siguiente
  const handleNextPage = () => {
    if (startIndex + pageSize < raffleNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para manejar la página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mt-5">
        <h2 className="font-raleway-black text-3xl">Escoge tu Numero</h2>
        <p>Puedes escoger uno o mas numeros</p>
      </section>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mt-10">
        {currentNumbers.map((number) => (
          <Button
            onPress={() => handleSelectNumber(number)} // Utilizar la función para actualizar el estado
            key={number}
            className={`p-3 border-2 rounded-lg cursor-pointer transition-all shadow-lg 
            ${
              selectedRaffles.includes(number)
                ? "bg-[#6cfa84] border-[#08df48]"
                : "bg-[#fff] border-[#2E3844]"
            } 
            text-black`}
          >
            {number}
          </Button>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4 items-center">
        <button
          className=" text-black p-2 rounded-lg"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Preview />
        </button>
        <span className="text-sm font-raleway-black">{`Pág ${currentPage}`}</span>
        <button
          className=" text-black p-2 rounded-lg"
          onClick={handleNextPage}
          disabled={startIndex + pageSize >= raffleNumbers.length}
        >
          <Next width={24} height={24} />
        </button>
      </div>
      <div className="mt-5 flex space-x-4">
        <button
          className="bg-[#2E3844] text-white p-2 rounded-lg"
          onClick={handleAddRandomNumber}
        >
          Número Aleatorio
        </button>
        {selectedRaffles.length > 0 && (
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={handleClearSelection}
          >
            Limpiar
          </button>
        )}
      </div>

      {selectedRaffles.length > 0 && (
        <>
          <EpaycoCheckout
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            valueRaffle={selectedRaffles.join(", ")} // Muestra los números seleccionados
            price={price * selectedRaffles.length} // Calcular el monto total
            handlePayment={handlePayment}
            nombre={nombre}
            imagen={imagen}
          />
        </>
      )}

      <section className="mt-5 mb-10">
        {selectedRaffles.length === 0 ? (
          <p className="font-raleway-black">Escoga un numero</p>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center">
              <p className="font-raleway-black text-2xl">
                Números seleccionados
              </p>
              <p className="p-1 mt-2 px-3 rounded-lg bg-transparent border-2 border-green-500">
                {selectedRaffles.join(", ")}
              </p>
              <button
                className="mt-2 bg-[#2E3844] p-3 px-3 rounded-lg text-white"
                onClick={onOpen}
              >
                Confirme sus numeros
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Raffle;
