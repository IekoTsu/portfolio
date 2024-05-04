import '../CSS/Home.css';
import aboutImg from "../img/john-doe-about.jpg";


const Home = () => {
    return (
        <main className='flex-grow-1 bg-light'>
            <section className='interface d-flex justify-content-center align-items-center'>
                <div className='interface__content d-flex flex-column gap-3 mb-3 px-3'>
                    <h1 className='interface__title text-light text-center mx-auto'>Bonjour, je suis John Doe</h1>
                    <h2 className='interface__subtitle text-light mx-auto text-center '>Développeur web full stack</h2>
                    <a href='#scrollspyAbout' className="btn btn-primary mx-auto px-4" >En savoir plus</a>
                </div>
            </section>
            <article id='scrollspyAbout' className='about rounded row m-5 p-5 bg-light shadow p mx-auto'>
                <div className='about__content col-md-6'>
                    <h3>À propos</h3>
                    <hr className="hr" />
                    <p>
                        Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur- développeur web</strong> au CEF. Au cours de cette formation, 
                        j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                    </p>
                    <p>
                        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
                    </p>
                    <p>
                        J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web
                    </p>
                </div>
                <div className='about__skills-container col-md-6 gap-3'>
                    <img  className='about__image rounded img-fluid' src={aboutImg} alt='Un homme concentré devant son ordinateur portable, assis à son bureau.' />
                    <div className='about__skills '>
                        <h4 className='mt-2'>Mes compétences</h4>
                        <div className='about__skills-item my-3'>
                            <p className='mb-1'>HTML 90%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                            </div>
                        </div>

                        <div className='about__skills-item my-3'>
                            <p className='mb-1'>CSS3 80%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                            </div>
                        </div>
                        <div className='about__skills-item my-3'>
                            <p className='mb-1'>JAVASCRIPT 70%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                            </div>
                        </div>
                        <div className='about__skills-item my-3'>
                            <p className='mb-1'>PHP 60%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                            </div>
                        </div>
                        <div className='about__skills-item my-3'>
                            <p className='mb-1'>REACT 50%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-primary" style={{width: '50%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );

};

export default Home