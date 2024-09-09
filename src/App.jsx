import Sorteos from "./components/sorteos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatApp from "./components/WhatApp";
import { Carrusel } from "./components/Carrusel";
function App() {
  return (
    <>
      <header className="mb-20">
        <Header />
      </header>
      {/* <Carrusel /> */}
      <main className="w-[95%] md:max-w-[1300px] h-auto flex flex-col items-center justify-center gap-2  m-auto mb-20">
        <Sorteos />
      </main>
      <WhatApp />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
