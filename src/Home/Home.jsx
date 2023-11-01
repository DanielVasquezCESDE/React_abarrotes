import './Home.css'
import { Formulario } from '../Formulario/Formulario'
export function Home() {

    return (
        <>
            <header>
                
            </header>

            <main>

                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand">Navbar</a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <section>
                    <div className="container-fluid p-5">
                        <div className="row">
                            <div className="col-12 col-md-3  text-center">
                                <div className="row my-3 border p-3">
                                    <div class="dropdown">
                                        <h5 class=" mx-auto d-block dropdown-toggle" type="button" data-bs-toggle="dropdown">Opcion 1</h5>
                                        
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row my-3 border p-3">
                                    <div class="dropdown">
                                    <h5 class=" mx-auto d-block dropdown-toggle" type="button" data-bs-toggle="dropdown">Opcion 1</h5>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className="row my-3 border p-3">
                                    <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-12 col-md-9 bg-dark">

                                <img src="../../src/assets/img/bannerprueba.PNG" alt="" className='img-fluid w-100' />

                            </div>
                        </div>
                    </div>
                </section>


            </main>

           



            

        </>
    )

}