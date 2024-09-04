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
          setPaymentDetails(data);
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
      <h1 className="text-2xl font-bold">Detalles del Pago {refPayco}</h1>
      {paymentDetails ? (
        <div>
          <p>
            <strong>ID de Transacción:</strong> {paymentDetails.transactionId}
          </p>
          <p>
            <strong>Estado:</strong> {paymentDetails.status}
          </p>
          <p>
            <strong>Mensaje:</strong> {paymentDetails.message}
          </p>
          {/* Muestra otros detalles necesarios aquí */}
        </div>
      ) : (
        <p>No se encontraron detalles para esta referencia.</p>
      )}
    </div>
  );
};

export default PaymentDetails;
