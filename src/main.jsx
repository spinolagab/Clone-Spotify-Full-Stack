import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // StrictMode renderiza os componentes por 2 vezes para auxiliar com identificação de erros e melhorar a robustes
  <StrictMode>
    <App />
  </StrictMode>
);
