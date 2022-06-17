export const Products = () =>{
    return <main className="container">
        <section className="d-flex justify-content-center titleProdu">
            <h1><span className="subrayado">Nuestros Productos</span></h1>
        </section>

        <div className="row">
            <div className="col-sm-2 boxBoton">
                <div className="nav flex-sm-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active botonStyle" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><span className="prounded">MATES</span></button>
                    <button className="nav-link botonStyle" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><span className="prounded">BOMBILLAS</span></button>
                    <button className="nav-link botonStyle" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><span className="prounded">TERMOS</span></button>
                </div>
            </div>
            <div className="col-sm-9">
                <div className="tab-content" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div className="container">

                            <div className="card-deck row">

                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodM1.jpg" className="card-img-top" alt="mate clasico"/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Clasico</h5>
                                                <p className="card-text textoCard">Mate de madera forrado en cuero con distintos motivos.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodM2.jpg" className="card-img-top" alt="mate de madera"/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Madera</h5>
                                                <p className="card-text textoCard">Mate de madera en forma de caliz sin grabado.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodM3.jpg" className="card-img-top" alt="mate desmontable"/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Desmontable</h5>
                                                <p className="card-text textoCard">Mate de calabaza estilo torpedo forrado en cuero y desmontable.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodM1.jpg" className="card-img-top" alt="mate clasico"/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Clasico</h5>
                                                <p className="card-text textoCard">Mate de madera forrado en cuero con distintos motivos.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="container">

                            <div className="card-deck row">

                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodBo1.jpeg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Recta</h5>
                                                <p className="card-text textoCard">Bombilla recta tradicional de acero inoxidable con resorte doblemente reforzado.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodBo2.jpeg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Tradicional</h5>
                                                <p className="card-text textoCard">Bombilla tradicional de acero inoxidable a resorte con una inclinacion a 45º.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodBo3.jpeg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Pesada</h5>
                                                <p className="card-text textoCard">Bombillon pesado de acero quirurjico con distintos detalles y relieves.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodBo1.jpeg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Recta</h5>
                                                <p className="card-text textoCard">Bombilla recta tradicional de acero inoxidable con resorte doblemente reforzado.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div className="container">

                            <div className="card-deck row">

                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodT1.jpg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Coleman 1l</h5>
                                                <p className="card-text textoCard">Termo Coleman construido en acero inoxidable capaz de conserverar el agua caliente hasta 33 horas.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodT2.jpg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Stanley 1.5</h5>
                                                <p className="card-text textoCard">Termo Stanley construido en acero inoxidable capaz de conserverar el agua caliente hasta 40 horas.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodT3.jpg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Waterdog 1.2</h5>
                                                <p className="card-text textoCard">Termo Waterdog construido en acero inoxidable capaz de conserverar el agua caliente hasta 37 horas.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">

                                    <div className="card" aria-hidden="true">
                                        <img src="../assets/prodT1.jpg" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title tituloCard">Coleman 1.2</h5>
                                                <p className="card-text textoCard">Termo Coleman construido en acero inoxidable capaz de conserverar el agua caliente hasta 33 horas.</p>
                                                <a href="#" className="btn btnProdu btn-primary">COMPRAR</a>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}

export default Products
