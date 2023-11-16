export function Resena() {
  return (
    <>
      <div className="container my-5">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static bg-light">
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              Reseña
            </strong>
            <h3 className="mb-0">Maria Angélica</h3>
            <div className="mb-1 text-body-secondary">
              Nunca dejen de soñar.
            </div>
            <p className="card-text mb-auto">
              Actualmente, me pueden encontrar todos los días en la Calle
              Comercial Plaza de Bello. Mi espacio de trabajo soñado se
              materializa en una tienda de mercado que ofrece una amplia
              variedad de productos. Siempre estoy dispuesta a recibir a todos
              con alegría y amor.
            </p>
            <a
              href="#"
              className="icon-link gap-1 icon-link-hover stretched-link"
            >
              Continue reading
              <svg className="bi">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              src="../../src/assets/img/woman-431957_1280.jpg" // Reemplaza con la URL de tu imagen
              alt="Descripción de la imagen"
              className="img-fluid" // Clase de Bootstrap para hacer la imagen responsive
            />
          </div>
        </div>
      </div>
    </>
  );
}
