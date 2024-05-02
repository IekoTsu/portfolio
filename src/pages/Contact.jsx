import Heading from "../components/Heading";
import "../CSS/Contact.css"

const  validatFields = (event) =>{
    event.preventDefault()
    const fileds = document.getElementsByClassName("form-control")
    for ( let filed of fileds){
        if (filed.value.trim().length === 0){
            filed.classList.add("is-invalid")
        } else {
            filed.classList.remove("is-invalid")
            filed.classList.add("is-valid")
        }
    } 
}


const Contact = () =>{
    return (
        <main className="contact p-5 className='flex-grow-1'">
            <section className="contact__section rounded p-5">
                <Heading title="ME CONTACTER" description="Pour me contacter en vue d'un entretin ou d'une future collaboration, merci de remplir le formulaire de contact." />
                <div className="contact__info-container row g-4">
                    <form className="contact__form needs-validation col-12 col-lg-6" onSubmit={validatFields}>
                        <h2 className="contact__form-title">Formulaire de contact</h2>
                        <hr className="contact__hr"/>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="name@example.com" />
                                <label htmlFor="floatingName">Votre nom</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="Password" />
                            <label htmlFor="floatingEmail">Votre adresse email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="tel" className="form-control" id="floatingNum" placeholder="Password" />
                            <label htmlFor="floatingNum">Votre numéro de téléphone</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Password" />
                            <label htmlFor="floatingInput">Sujet</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100 + "px"}} ></textarea>
                          <label htmlFor="floatingTextarea2">Votre message</label>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Envoyer</button>
                        </div>
                    </form>
                    <div className="contact__contact-info col-6 ">
                        <h3 className="contact__contact-info-title fs-2">Mes coordonnées </h3>
                        <hr className="contact__hr"/>
                        <strong>
                            <i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold 69009 Lyon, France <br/> 
                            <i className="fa-solid fa-mobile-screen"></i> <a className="footer__link text-decoration-none text-reset" href="tel:+33620304050" target="_blank">Téléphone: 06 20 30 40 50 </a>
                        </strong>
                            <div className="contact__map-container">
                                <iframe
                                    className="w-100" 
                                    height="320" 
                                    loading="lazy" allowFullScreen src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=40%20Rue%20Laure%20Diebold%2069009%20Lyon,%20France%20Ifs+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">     
                                </iframe>
                            </div>
                        </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;