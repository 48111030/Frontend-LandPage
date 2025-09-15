// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <img src="https://img.icons8.com/ios-filled/24/ffffff/contrast.png" alt="Modo" />
        <img src="https://img.icons8.com/ios-filled/24/ffffff/light.png" alt="Luz" />
        <img src="https://img.icons8.com/ios-filled/24/ffffff/settings.png" alt="Configuración" />
      </nav>

      <main className="main-content">
        <div className="background-circle"></div>

        <img
          className="person-image"
          src="https://i.ibb.co/YtvcfY0/persona-laptop.png"
          alt="Persona con laptop"
        />

        <h1>PREDECÍ TUS FINANZAS</h1>

        <div className="text-box">
          <p>
            De la mano de FISA, tus posibilidades de aceptación de préstamo aumentan
            drásticamente.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
