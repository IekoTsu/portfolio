import './Home.css';
import aboutImg from "../img/john-doe-about.jpg";


const Home = () => {
    return (
        <main>
            <section className='interface d-flex justify-content-center align-items-center'>
                <div className='interface__content d-flex flex-column gap-3 mb-3'>
                    <h1 className='interface__title text-light mx-auto'>Bonjour, je suis John Doe</h1>
                    <h2 className='interface__subtitle text-light mx-auto '>Développeur web full stack</h2>
                    <button type="button" className="btn btn-primary mx-auto px-4 " >En savoir plus</button>
                </div>
            </section>
            <article className='about rounded d-flex m-5 p-5 gap-4 bg-light shadow p'>
                <div className='about__content w-50'>
                    <h3>À propos</h3>
                    <hr className="hr" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus felis, rutrum nec mi eget, egestas volutpat mauris. Curabitur massa velit, sodales vitae interdum ornare, mollis in purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nisi tellus, eleifend eget purus pretium, iaculis interdum dui. Aenean at orci iaculis, dictum est non, auctor nisl. Quisque id dui quam. In dignissim nibh id sapien iaculis, commodo pretium odio cursus. Aliquam aliquam aliquet arcu quis pretium. Suspendisse sit amet ex aliquam, hendrerit nulla nec, cursus ex.</p>
                </div>
                <div className='about__skills-container w-50 d-flex flex-column gap-3'>
                    <img  className='about__image rounded img-fluid' src={aboutImg} alt='' />
                    <div className='about__skills '>
                        <h4>Mes compétences</h4>
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