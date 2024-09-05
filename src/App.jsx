//import EpaycoCheckout from "./components/WebCheckout";
import Raffle from "./components/Raffe";
function App() {
  return (
    <>
      <section className="w-full h-auto flex flex-col items-center justify-center gap-2">
        <Raffle price={5000} />
      </section>
    </>
  );
}

export default App;
