import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PaymentDetails from "./page/response.jsx";
import SorteoDetal from "./page/sorteoDetal.jsx";
import ComoJugar from "./page/ComoJugar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/response",
    element: <PaymentDetails />,
  },
  {
    path: "/sorteo/:id",
    element: <SorteoDetal />,
  },
  {
    path: "/comoJugar",
    element: <ComoJugar />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
