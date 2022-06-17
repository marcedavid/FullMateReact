export const Navbar = () => {
    return <header>
 <nav className="navbar navbar-expand-lg navbar-dark navStyle">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"><span>Full
            Mates</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/about.html">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/productos.html">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/como.html">Como Llegar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
    </header>
}
export default Navbar
