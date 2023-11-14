import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
import { Carusel } from "../Carusel/Carusel";
import { Tarjetas } from "../Tarjetas/Tarjetas";
import { Footer } from "../Pie_de_pagina/Footer";
export function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light menu px-5">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <img
              
                src="../../src/assets/img/abarrotes.png"
                alt=""
                width="100"
                height="100"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex mx-auto">
                <input
                  className="form-control me-2 px-4"
                  type="search"
                  placeholder="Libra de panela..."
                  aria-label="Search"
                />
                <button className="btn btn-warning" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item px-1 border-end border-dark">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item px-1 border-end border-dark">
                  <a className="nav-link" href="#">
                    <i class="bi bi-basket-fill"></i>   
                    <span> Productos</span>
                  </a>
                </li>
                <li className="nav-item px-1 border-end border-dark ">
                  <a className="nav-link" href="#">
                    <i class="bi bi-headset"></i>
                    <span> Servicio al cliente</span>
                  </a>
                </li>
              
                <li className="nav-item px-1 enlaces">
                  <a className="nav-link" href="#">
                    <i class="bi bi-chat-left-heart-fill"></i>
                    <span> Reseña</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div className="banner text-white fw-bold">
            <div className="container-fluid p-5">
              <div className="row">
                <div className="col-12 col-md-3  text-center">
                  <div className="row my-3 border p-3">
                    <div className="dropdown">
                      <h5
                        className=" mx-auto d-block dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Opcion 1
                      </h5>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row my-3 border p-3">
                    <div className="dropdown">
                      <h5
                        className=" mx-auto d-block dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Opcion 1
                      </h5>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row my-3 border p-3">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
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
          </div>
        </section>
      </main>

      <section>
        <Carusel></Carusel>
      </section>

      <section>
        <Tarjetas></Tarjetas>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </>
  );
}
