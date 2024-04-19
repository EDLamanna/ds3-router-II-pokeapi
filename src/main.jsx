import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import PokemonProvider from "./context/PokemonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokemonProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonProvider>
);
