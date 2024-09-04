// src/PaymentResponse.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentResponse = () => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const transactionState = query.get("transactionState"); // Estado de la transacción
    const referenceCode = query.get("referenceCode"); // Código de referencia de la transacción

    // Manejo de respuesta según el estado de la transacción
    if (transactionState === "4") {
      alert("Pago exitoso");
    } else if (transactionState === "6") {
      alert("Pago rechazado");
    } else {
      alert("Estado desconocido");
    }
  }, [location]);

  return (
    <div>
      <h1>Respuesta de Pago</h1>
      <p>Verifica la URL para más detalles sobre la transacción.</p>
    </div>
  );
};

export default PaymentResponse;
