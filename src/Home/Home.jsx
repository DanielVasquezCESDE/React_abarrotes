import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
export function Home() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg menu">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="form-outline">
                    <img src="../../src/assets/img/abarrotes.png" class="img-fluid" alt="Ícono de Búsqueda" width="100px" />
                    <span>  Abarrotes La Esperanza</span>
                </div>
            </a>

            <form class="d-flex" role="search">
                <div class="form-outline">
                    <input type="text" class="form-control ps-5" placeholder="Buscar mercado" />
                    <i class="bi bi-search ms-3"></i>
                </div>                  
                <button class="btn btn-outline-dark" type="submit">Search</button>
            </form>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item border-end">
                  <a class="nav-link active" aria-current="page" href="#">
                  ¡Contactános!
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  Reseña
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
             
                        
              
            </div>
          </div>
        </nav>
      </header>



      <main>
        <section>
          <div className="container-fluid p-5">
            <div className="row">
              <div className="col-12 col-md-3  text-center">
                <div className="row my-3 border p-3">
                  <div class="dropdown">
                    <h5
                      class=" mx-auto d-block dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Opcion 1
                    </h5>

                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row my-3 border p-3">
                  <div class="dropdown">
                    <h5
                      class=" mx-auto d-block dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Opcion 1
                    </h5>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row my-3 border p-3">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9 bg-dark">
                <img
                  src="../../src/assets/img/bannerprueba.PNG"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
