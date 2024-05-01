import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer ">
            <div className="footer__content row gap-sm-2 gap-md-0 gap-lg-0 p-5">
                <div className="footer__section col-lg-3 col-md-6">
                    <h5 className="footer__title">John Doe</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-center"> 40 Rue Laure Diebold <br/> 69009 Lyon, France</li>
                        <li className="footer__item d-flex align-items-center"> <a className="footer__link" href="tel:+33620304050" target="_blank">Téléphone: 06 20 30 40 50 </a> </li>
                        <li className="footer__social-icons my-3">
                            <i className="footer__icon fa-brands fa-github fa-2xl m-3"></i>
                            <i className="footer__icon fa-brands fa-square-twitter fa-2xl m-3"></i>
                            <i className="footer__icon fa-brands fa-linkedin fa-2xl m-3"></i>    
                        </li>
                    </ul>
                </div>
                <div className="footer__section col-lg-3  col-md-6">
                    <h5 className="footer__title">Liens utiles</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Accueil </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> À propos </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Services </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Me contacter </li>
                        <li className="footer__item d-flex align-items-top"><Link to="/legal-notices"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Mentions légales</Link> </li>
                    </ul>
                </div>
                <div className="footer__section col-lg-3  col-md-6">
                    <h5 className="footer__title" >Mes dernières réalisations</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Fresh food </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Restaurant Akira </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Espace bien-être</li>
                    </ul>
                </div>
                <div className="footer__section col-lg-3  col-md-6">
                    <h5 className="footer__title" >Mes dernires artiles</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Coder son site en HTML/CSS </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Vendre ses produits sur le web </li>
                        <li className="footer__item d-flex align-items-top"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Se positionner sur Google</li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="footer__text text-light text-center p-3"> <i className="fa-regular fa-copyright"></i> Designed by John Doe</p>
            </div>
        </footer>
    );
};

export default Footer ; 