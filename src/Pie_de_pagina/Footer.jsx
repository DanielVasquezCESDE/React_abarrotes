export function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid bg-dark text-white">
                    <div className="row p-5">
                        <div className="col-2">
                            <a className="navbar-brand" href="#">
                                <img
                                    src="../../src/assets/img/abarrotes.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                        <div className="col-4 row text-center mx-auto border-end">
                            <div className="col-12"></div>
                            <div className="col-12 ">
                                <h3 className="h1">Tienda de abarrotes La Esperanza</h3>
                                <h5 className="h1">Bello-Antioquia-Colombia</h5>
                                <h5 className="h1">Todos los derechos reservados &copy;</h5>
                            </div>
                            <div className="col-12"></div>
                        </div>
                        <div className="col-3 align-self-center">
                            <i className="bi bi-instagram p-2 fs-4"></i>
                            <i className="bi bi-whatsapp p-2 fs-4"></i>
                            <i className="bi bi-tiktok p-2 fs-4"></i>
                        </div>
                        <div className="col-3 align-self-center">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
