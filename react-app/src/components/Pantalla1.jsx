import './Pantalla1.css';

const Pantalla1 = () => {
  return (
    <section className="pantalla pantalla1">
      <img src="/logo.png" alt="Logo" className="LOGOGRANDE" />
      <img src="/persona.png" alt="Persona con laptop" className="persona" />
      <h1 className="predict">PREDECÍ TUS FINANZAS</h1>
      <div className="text-container">
        <p>
          DE LA MANO DE FISA, TUS POSIBILIDADES DE ACEPTACIÓN<br />
          DE PRÉSTAMO AUMENTAN DRASTICAMENTE
        </p>
      </div>
    </section>
  );
};

export default Pantalla1;
