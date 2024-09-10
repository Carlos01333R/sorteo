/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/react";

export default function ModalVideo({ isOpen, onOpenChange }) {
  return (
    <>
      <Modal
        backdrop="blur"
        size="3xl"
        placement="center"
        className="bg-transparent"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  loop
                  controls
                  className="w-full h-full p-1 rounded-xl"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
