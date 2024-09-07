/* eslint-disable react/prop-types */
// src/components/EpaycoCheckout.js
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

// Función para formatear a pesos colombianos
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(amount);
};

const EpaycoCheckout = ({
  isOpen,
  onOpenChange,
  valueRaffle,
  price,
  handlePayment,
  nombre,
  imagen,
}) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <section className="w-full flex flex-col items-center justify-center gap-2">
                <h2 className="text-3xl font-raleway-black text-center">
                  Sorteo {nombre}
                </h2>

                <img src={imagen} alt="" />
                <h2 className="font-raleway-black text-center">
                  Tus números a participar
                </h2>
                <p className="p-2 px-5 bg-transparent border-2 border-green-500 rounded-lg">
                  {valueRaffle}
                </p>
              </section>
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-[#2E3844] text-white p-2 rounded-lg"
                onPress={() => {
                  onClose();
                  handlePayment();
                }}
              >
                Pagar: {formatCurrency(price)}
              </Button>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EpaycoCheckout;
