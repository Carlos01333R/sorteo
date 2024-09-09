import { Tooltip } from "@nextui-org/react";
export default function WhatApp() {
  return (
    <section className="w-full flex justify-end items-end">
      <div className=" fixed top-[85%]  rounded-full z-50 md:mr-3">
        <Tooltip content="Comunicarse con nosotros">
          <a href="https://wa.me/3053248190" target="_blank">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/748/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
              alt="whatsapp"
              className="w-20 h-20 rounded-full"
            />
          </a>
        </Tooltip>
      </div>
    </section>
  );
}
