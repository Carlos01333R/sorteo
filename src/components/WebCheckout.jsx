/* eslint-disable react/prop-types */
// src/components/EpaycoCheckout.js
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

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
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
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
                  Tus numeros a participar
                </h2>
                <p className="p-2 px-5 bg-transparent border-2 border-green-500 rounded-lg">
                  {valueRaffle}
                </p>
              </section>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={() => {
                  onClose();
                  handlePayment();
                }}
              >
                Pagar: {price}
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
