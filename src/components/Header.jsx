import { NavLink } from "react-router-dom";
import logo from '../img/apple-touch-icon.png'

const Nav = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"> <img src= {logo} className="navbar_logo"></img> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">ACCUEIL</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">SERVICES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/achievements">RÉALISATIONS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">ME CONTACTER</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;