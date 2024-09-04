// src/components/EpaycoCheckout.js

const EpaycoCheckout = () => {
  const handlePayment = () => {
    const epayco = window.ePayco;

    // Configuración de la transacción
    const data = {
      // Tu public_key de Epayco
      key: "58a0150cf636cce288eabb215dfb5fa8",
      // Datos de la transacción
      name: "Product Name",
      description: "Product Description",
      amount: "10000", // Monto en COP (o la moneda que uses)
      currency: "COP",
      country: "CO",
      lang: "es",
      // Redirección en caso de éxito
      responseUrl: "https://sorteopy.vercel.app/response",
      // Redirección en caso de error
      confirmationUrl: "http://yourwebsite.com/error",
      // Opcional: agregar una imagen
      image: "http://yourwebsite.com/logo.png",
    };

    epayco.checkout.configure({
      key: data.key,
      test: true,
    });

    epayco.checkout.open(data);
  };

  return (
    <>
      <section
        style={{
          width: "300px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "15px",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <img
          src="https://www.puertadelnorte.com/wp-content/uploads/2021/11/imagen-sorteo-noviembre-puerta-del-norte.jpg"
          alt="carro"
          width="100%"
        />
        <button onClick={handlePayment} className="btn btn-primary">
          Pagar con Epayco
        </button>
      </section>
    </>
  );
};

export default EpaycoCheckout;
