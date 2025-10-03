// FacilidadMensaje.jsx
import React from "react";
import "./Pantalla5.css";

const pantalla5 = () => {
  return (
    <div className="facilidad-container">
  

      <div className="content">
        <h1 className="facil">YA VISTE LO FÁCIL QUE ES?</h1>
        <div className="cajitaTexto">
          <p>
            Te toma más tiempo salir de nuestra web<br />
            de lo que tardaremos en devolverte<br />
            un análisis completo.
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="left">
          <img src="/logo.png" alt="Logo" className="loguin" />  <span className="logo10">FISA</span>
          <span>Copyright © 2025 Fisa</span>
        </div>
        <div className="right">
          <p>Contactanos</p>
          <p>@Fisa.ig</p>
          <p>@Fisa.tw</p>
        </div>
      </footer>
    </div>
  );
};

export default pantalla5;
