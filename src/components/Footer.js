export const Footer = () => {
    return <footer className="text-center text-white">
 
    <div className="container">

        <section className="mt-5">

            <div className="row text-center d-flex justify-content-center pt-5">

                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="../index.html" className="text-white">Home</a>
                    </h6>
                </div>

                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="./about.html" className="text-white">Nosotros</a>
                    </h6>
                </div>

                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="./productos.html" className="text-white">Productos</a>
                    </h6>
                </div>

                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="./como.html" className="text-white">Como Llegar</a>
                    </h6>
                </div>

                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                        <a href="./contacto.html" className="text-white">Contacto</a>
                    </h6>
                </div>

            </div>

        </section>


        <hr className="my-5" />


        <section className="mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <p>
                        Somos una empresa lider en el mercado,
                        orientada a ofrecer la mejor calidad y variedad
                        en productos de venta, brindandole a nuestros
                        clientes las mejores opciones de compra.
                    </p>
                </div>
            </div>
        </section>


        <section className="text-center mb-5">
            <a href="https://www.facebook.com/marcelodavid95" target="_blank" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com/marcedavid10" className="text-white me-4" target="_blank">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/marcedavid1" className="text-white me-4" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/marcedavid" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/marcedavid" className="text-white me-4" target="_blank">
                <i className="fab fa-github"></i>
            </a>
        </section>
    </div>

    <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-white" href="#">Marcelo David</a>
    </div>
</footer>
}
export default Footer