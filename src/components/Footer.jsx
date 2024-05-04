import { Link } from "react-router-dom";
import { useState } from "react";

// Function to scroll to the top of the page
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Function to toggle the display of the back-to-top button
function UpBtn(){
    const [btnDisplay , displaySet] = useState("block")

    // Add an event listener to the window object to detect scroll events
    window.onscroll = function () {
        scrollFunction();
      };

      // Function to check if the user has scrolled past a certain threshold
      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
        // If the user has scrolled past the threshold, display the button
          displaySet("block");
        } else {
        // If the user has not scrolled past the threshold, hide the button
          displaySet("none");
        }
      };

    return(
        <button type="button" className="footer__btn btn btn-floating btn-lg" style={{ display : btnDisplay }} id="btn-back-to-top" onClick={backToTop}>
                <i className="fas fa-arrow-up"></i>
        </button>
    );
}



const Footer = () => {
    return(
        <footer className="footer">
            <UpBtn></UpBtn>
            <div className="footer__content row gap-sm-2 gap-md-0 gap-lg-0 p-5">
                <div className="footer__section col-lg-3 col-md-6">
                    <h5 className="footer__title">John Doe</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-center">
                            <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?authuser=0&entry=ttu" target="_blank">
                                40 Rue Laure Diebold <br/> 69009 Lyon, France 
                             </a> 
                        </li>
                        <li className="footer__item d-flex align-items-center"> <a className="footer__link" href="tel:+33620304050" target="_blank">Téléphone: 06 20 30 40 50 </a> </li>
                        <li className="footer__social-icons my-3">
                            <Link to='/github-profile'><i className="footer__icon fa-brands fa-github fa-2xl m-3"></i></Link>
                            <a href="https://fr.wikipedia.org/wiki/John_Doe" target="_blank"><i className="footer__icon fa-brands fa-square-twitter fa-2xl m-3"></i></a>
                            <a href="https://fr.wikipedia.org/wiki/John_Doe" target="_blank"><i className="footer__icon fa-brands fa-linkedin fa-2xl m-3"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer__section col-lg-3  col-md-6">
                    <h5 className="footer__title">Liens utiles</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-top"><Link to='/'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Accueil </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/' href='#scrollspyAbout'><i className="fa-solid fa-angle-right me-1 pt-1"></i> À propos </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/services'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Services </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/contact'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Me contacter </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to="/legal-notices"><i className="fa-solid fa-angle-right me-1 pt-1"></i> Mentions légales</Link> </li>
                    </ul>
                </div>
                <div className="footer__section col-lg-3  col-md-6">
                    <h5 className="footer__title" >Mes dernières réalisations</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-top"><Link to='/achievements'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Fresh food </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/achievements'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Restaurant Akira </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/achievements'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Espace bien-être </Link></li>
                    </ul>
                </div>
                <div className="footer__section col-lg-3  col-md-6">
                    <h5 className="footer__title" >Mes dernires artiles</h5>
                    <ul className="footer__list list-unstyled">
                        <li className="footer__item d-flex align-items-top"><Link to='/blog'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Coder son site en HTML/CSS </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/blog'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Vendre ses produits sur le web </Link></li>
                        <li className="footer__item d-flex align-items-top"><Link to='/blog'><i className="fa-solid fa-angle-right me-1 pt-1"></i> Se positionner sur Google </Link></li>
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