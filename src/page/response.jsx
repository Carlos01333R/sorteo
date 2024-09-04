// src/pages/PaymentDetails.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentDetails = () => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Obtén la referencia del query string
  const queryParams = new URLSearchParams(location.search);
  const refPayco = queryParams.get("ref_payco");

  useEffect(() => {
    if (refPayco) {
      const fetchPaymentDetails = async () => {
        try {
          const response = await fetch(
            `https://secure.epayco.co/validation/v1/reference/${refPayco}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          // Verificar si la respuesta contiene los datos esperados
          if (data.success && data.data) {
            setPaymentDetails(data.data);
          } else {
            setError("No se encontraron detalles para esta referencia.");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPaymentDetails();
    } else {
      setError("Referencia de pago no proporcionada");
      setLoading(false);
    }
  }, [refPayco]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <a href="https://sorteopy.vercel.app/">Home</a>
      <h1 className="text-2xl font-bold">Detalles del Pago {refPayco}</h1>
      {paymentDetails ? (
        <div>
          <p>
            <strong>ID de Transacción:</strong>{" "}
            {paymentDetails.x_transaction_id}
          </p>
          <p>
            <strong>Fecha:</strong> {paymentDetails.x_fecha_transaccion}
          </p>
          <p>
            <strong>Estado:</strong> {paymentDetails.x_respuesta}
          </p>
          <p>
            <strong>Monto:</strong> {paymentDetails.x_amount}
          </p>
          <p>
            <strong>Descripción:</strong> {paymentDetails.x_description}
          </p>
          <p>
            <strong>Nombre del Banco:</strong> {paymentDetails.x_bank_name}
          </p>
          <p>
            <strong>Código de Aprobación:</strong>{" "}
            {paymentDetails.x_approval_code}
          </p>
          <p>
            <strong>Tarjeta:</strong> {paymentDetails.x_cardnumber}
          </p>
          <p>
            <strong>Cliente:</strong> {paymentDetails.x_customer_name}{" "}
            {paymentDetails.x_customer_lastname}
          </p>
          <p>
            <strong>Email del Cliente:</strong>{" "}
            {paymentDetails.x_customer_email}
          </p>
          {/* Agrega otros detalles relevantes según tus necesidades */}
        </div>
      ) : (
        <p>No se encontraron detalles para esta referencia.</p>
      )}
    </div>
  );
};

export default PaymentDetails;
