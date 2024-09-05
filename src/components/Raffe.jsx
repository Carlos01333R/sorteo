/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import EpaycoCheckout from "./WebCheckout";
import Api from "../hook/Api";

const Raffle = ({ price, nombre }) => {
  const [valueRaffle, setValueRaffle] = useState(null); // Estado para almacenar el número seleccionado
  const { countries } = Api(); // Datos que vienen de la API
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Filtrar los números ocupados solo para el sorteo actual por `nombre_sorteo`
  const occupiedNumbers = countries
    .filter((country) => country.nombre_sorteo === nombre) // Filtrar por nombre del sorteo
    .map((country) => String(country.numero).padStart(3, "0")); // Convertir a formato de 3 dígitos

  // Generar el array de números del 001 al 100, excluyendo los que ya están en occupiedNumbers
  const raffleNumbers = Array.from({ length: 100 }, (_, index) => {
    return String(index + 1).padStart(3, "0");
  }).filter((number) => !occupiedNumbers.includes(number));

  // Función para manejar la selección del número
  const handleSelectNumber = (number) => {
    setValueRaffle((prev) => (prev === number ? null : number)); // Permite deseleccionar si se vuelve a clicar el mismo número
    onOpen(); // Abre el modal al seleccionar un número
  };

  // Redirige a la página de detalles del pago con el nombre del sorteo y la referencia de pago
  const handlePayment = () => {
    const epayco = window.ePayco;

    // Configuración de la transacción
    const data = {
      key: "58a0150cf636cce288eabb215dfb5fa8", // Tu public_key de Epayco
      name: nombre,
      description: valueRaffle,
      amount: price, // Monto en COP (o la moneda que uses)
      currency: "COP",
      country: "CO",
      extra1: nombre,
      lang: "es",
      responseUrl: `https://sorteopy.vercel.app/response
      )}`, // Agrega el nombre del sorteo aquí
      confirmationUrl: "http://yourwebsite.com/error", // Cambiar a la URL de error correcta
      image: "http://yourwebsite.com/logo.png", // Opcional: agregar una imagen
    };

    epayco.checkout.configure({
      key: data.key,
      test: true,
    });

    epayco.checkout.open(data);
  };

  return (
    <>
      <div className="grid grid-cols-10 gap-2 mt-10">
        {raffleNumbers.map((number) => (
          <Button
            onPress={() => handleSelectNumber(number)} // Utilizar la función para actualizar el estado
            key={number}
            className={`p-3 border-2 rounded-lg cursor-pointer transition-all 
            ${
              valueRaffle === number
                ? "bg-[#d0d0d0] border-blue-500"
                : "bg-[#f0f0f0] border-[#ccc]"
            } 
            text-black`}
          >
            {number}
          </Button>
        ))}
      </div>
      {valueRaffle && (
        <>
          <EpaycoCheckout
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            valueRaffle={valueRaffle}
            price={price}
            handlePayment={handlePayment}
          />
        </>
      )}
      <ul>
        {countries
          .filter((country) => country.nombre_sorteo === nombre)
          .map((country) => (
            <li key={country.id}>{country.numero}</li>
          ))}
      </ul>
    </>
  );
};

export default Raffle;
