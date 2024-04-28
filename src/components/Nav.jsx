import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="">ACCUEIL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/achievements">RÉALISATIONS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">ME CONTACTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;