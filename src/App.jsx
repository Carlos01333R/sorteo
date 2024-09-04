import EpaycoCheckout from "./components/WebCheckout";
function App() {
  return (
    <>
      <section
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <EpaycoCheckout />
      </section>
    </>
  );
}

export default App;
