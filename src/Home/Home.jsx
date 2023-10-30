import './Home.css'
import { Formulario } from '../Formulario/Formulario'
export function Home() {

    return (
        <>
            <header>

                <nav class="navbar navbar-expand-lg navbar-dark mainmenu fixed-top">
                    <div class="container-fluid">
                        <div className="row container-fluid menu">
                            <div className="col-6 logo">
                                <a class="navbar-brand">
                                    <i class="bi bi-shop"></i>
                                    <span>  Abarrotes La Esperanza</span>
                                </a>
                            </div>
                            <div className="col-6">
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </nav>


                <section data-v-72c85ab9="" data-v-b9f1e73a="" class="banner mq-new-download-app--rounded"><div data-v-72c85ab9="" class="imagen"></div> <div data-v-72c85ab9="" class="space"></div> <div data-v-72c85ab9="" class="content"><div data-v-72c85ab9="" class="text"><h1 data-v-72c85ab9="">Vive la experiencia del <span>ahorro</span> desde nuestra app</h1> <p data-v-72c85ab9="">Más de <span>5.000</span> productos de tus marcas favoritas en la palma de tu mano. Fresco, rápido y confiable. ¡Así es Merqueo!</p></div> <div data-v-72c85ab9="" class="buttonsApp"><p data-v-72c85ab9="">Descarga la app</p> <div data-v-72c85ab9="" class="imgBtn"><div data-v-4b2cfe31="" data-v-72c85ab9="" class="mq-download-apps"><a data-v-4b2cfe31="" href="https://itunes.apple.com/us/app/id1080127941" target="_blank" rel="nofollow" class="mq-download-link"><img data-v-4b2cfe31="" src="/_nuxt/img/b291ac5.svg" alt="Descarga Merqueo en apple store" /></a> <a data-v-4b2cfe31="" href="https://play.google.com/store/apps/details?id=com.merqueo&amp;hl=es" target="_blank" rel="nofollow" class="mq-download-link"><img data-v-4b2cfe31="" src="/_nuxt/img/df7fa89.svg" alt="Descarga Merqueo en google play" /></a></div></div></div></div></section>

            </header>
            <div className="banner text-white fw-bold">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consequuntur numquam aperiam recusandae qui explicabo? Eos temporibus voluptatum veniam maiores est, deleniti repellat fuga consequuntur earum quos distinctio optio maxime.</p>
                <button className='btn btn-warning'>Conocenos</button>
            </div>
            <div className="container">
                <div className="row p-5 justify-content-center">
                    <div className="col-4 align-self-center text-center">
                        <h5>LA CASITA DEL HORROR</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut ipsam nulla sequi accusantium, unde facilis voluptatibus ratione nisi sunt tenetur? Laborum nisi assumenda sunt, dignissimos consequatur nulla explicabo tempora?</p>
                        <img src="../../src/assets/img/foto2.jpg" alt="foto" className='img-fluid' />
                    </div>
                </div>
                <div className="row"></div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img src="../../src/assets/img/banner3.png" alt="" className='img-fluid w-100' />
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 my-5">
                    <div className="col text-center">
                        <div className="card h-100 p-3 shadow">
                            <img src="../../src/assets/img/tarjeta1.webp" alt="" className='img-fluid w-100' />
                            <h3>SERVICIO 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                            <hr />
                            <h5 className='fw-bold text-success'>$500.000 COP</h5>
                            <button className='btn btn-primary'>
                                Ampliar  <i className="bi bi-shop-window"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col text-center">
                            <div className="card h-100 p-3 shadow">
                                <img src="../../src/assets/img/tarjeta2.webp" alt="" className='img-fluid w-100' />
                                <h3>SERVICIO 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                                <hr />
                                <h5 className='fw-bold text-success'>$500.000 COP</h5>
                                <button className='btn btn-primary'>
                                    Ampliar  <i className="bi bi-shop-window"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col text-center">
                            <div className="card h-100 p-3 shadow">
                                <img src="../../src/assets/img/tarjeta3.jpg" alt="" className='img-fluid w-100' />
                                <h3>SERVICIO 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                                <hr />
                                <h5 className='fw-bold text-success'>$500.000 COP</h5>
                                <button className='btn btn-primary'>
                                    Ampliar  <i className="bi bi-shop-window"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Formulario></Formulario>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container-fluid bg-dark text-white">
                    <div className="row p-5">
                        <div className="col-6 text-end border-end">
                            <h3>Pollos tenis de Mesa doña Angelica con pasarela y blood</h3>
                            <h5>Medellin-Colombia</h5>
                            <h5>Todos los derechos reservados &copy;</h5>
                        </div>
                        <div className="col-6 align-self-center">
                            <i className="bi bi-instagram p-2 fs-4"></i>
                            <i className="bi bi-whatsapp p-2 fs-4"></i>
                            <i className="bi bi-tiktok p-2 fs-4"></i>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )

}