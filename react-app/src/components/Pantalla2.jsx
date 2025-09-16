import './Pantalla2.css';

const Pantalla2 = () => {
  return (
    <section className="pantalla pantalla2">
      <main className="contenido">
        <h1>DESDE TU TIEMPO A TU PLATA,<br />TODO GENERA.</h1>
        <div className="features">
          <div className="feature">
            <img src="https://img.icons8.com/ios-filled/100/000000/money.png" alt="Icono dinero" className="icono" />
            <h2>MEJORAS EN SOLICITUDES</h2>
            <p>
              OPTIMIZAMOS EL USO DE TUS DATOS<br />
              PARA LA SOLICITUD Y EN BASE AL<br />
              CONTENIDO PROVISTO, TE DEVOLVEMOS<br />
              RECOMENDACIONES Y CONSEJOS<br />
              PARA MEJORAR TU SOLICITUD Y<br />
              AUMENTAR TUS POSIBILIDADES DE<br />
              OBTENER UN PRÉSTAMO.
            </p>
          </div>
          <div className="feature">
            <img src="https://img.icons8.com/ios-filled/100/000000/test-passed.png" alt="Icono testeo" className="icono" />
            <h2>TESTEO AUTOMATIZADO</h2>
            <p>
              TARDÁS 20 SEGUNDOS.<br />
              RESOLVÉS TODAS TUS DUDAS.<br />
              OBTENÉS UNA RESPUESTA<br />
              CLARA Y TE VAS DIRECTO AL<br />
              BANCO A PEDIR<br />
              TU PRÉSTAMO.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Pantalla2;
