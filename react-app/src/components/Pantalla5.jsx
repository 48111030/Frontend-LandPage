import './Pantalla5.css';

const Pantalla5 = () => {
  return (
    <section className="pantalla pantalla5">
      <h1 className="titulo5">FISA</h1>
      <div className="tarjetas-fisa">
        <div className="tarjeta">
          <div className="cuadraditolio "><img src="/reloj.png" alt="Reloj" className='a1'/></div>
          <p>Ya viste lo fácil que es.</p>
        </div>
        <div className="tarjeta">
       <div className="cuadraditolio "><img src="/logo.png" alt="Logo" /></div>   
          <p>
            Te toma más tiempo salir<br />
            de nuestra web de lo que<br />
            tardaremos en devolverte<br />
            un análisis ideal y completo.
          </p>
        </div>
        <div className="tarjeta">
            <div className="cuadraditolio "><img src="/riesgo.png" alt="Riesgo"  className='a3'/></div>
          
          <p>
            Reducí tus riesgos,<br />
            cuidá tu tiempo,<br />
            usá FISA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pantalla5;
