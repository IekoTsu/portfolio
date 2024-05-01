import Heading from "../components/Heading";
import '../CSS/LegalNotices.css'

const LegalNotices = () => {
    return(
        <main>
            <section className="p-5">
                <Heading title="MENTIONS LÉGALES" />
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Éditeur du site
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <address className="accordion-body">
                        <h3>John Doe</h3>
                        <p>
                            <i className="fa-solid fa-location-dot"/> 40 Rue Laure Diebold <br/>
                            69009 Lyon, France <br/>
                            <i className="fa-solid fa-mobile-screen"></i> <a className="footer__link text-decoration-none" href="tel:+33620304050" target="_blank">06 20 30 40 50 </a><br/>
                            <i className="fa-solid fa-envelope me-"/> <a className="text-decoration-none" href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                        </p>
                        
                      </address>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                      <address className="accordion-body">
                        <h3>Always Data</h3>
                        <p>
                            91 rue du Faubourg Saint Honoré <br/>75008 Paris <br/>
                            <i className="fa-solid fa-globe"/><a href="https://www.alwaysdata.com" target="blank" className="text-decoration-none"> www.alwaysdata.com</a>
                        </p>
                      </address>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h3>Crédits</h3>
                        <p className="lh-lg">
                            Site développé par John Doe, étudiant du CEF.<br/>
                            Les images libres de droit sont issues du site <a href="https://pixabay.com/" target="blank" className="text-decoration-none" >Pixabay</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </main>
    );
}

export default LegalNotices;