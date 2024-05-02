import '../CSS/Services.css'
import Heading from '../components/Heading';
const Services = () => {
    return (
        <main className='flex-grow-1'>
            <div className="banner"/>
            <section className='services p-5 '>
                <Heading title="UX DESIGN" description="Voici les prestation sur lesquelles je peux intervenir." />
                <div className='services__cards-container  my-5 d    h-100 row g-3 '>
                    <div className='col-12 col-md-4 '>
                        <div className='services__card px-4 d-flex flex-column align-items-center h-100 '>
                            <i className="services__icon fa-solid fa-display m-4"/>
                            <h2 className='services__card-title mt-1 text-center fs-4 '>UX DESIGN</h2>
                            <p className="services__card-description text-center"> L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='services__card px-4 d-flex flex-column align-items-center h-100 '>
                            <i className="services__icon fa-solid fa-display m-4"/>
                            <h2 className='services__card-title mt-1 text-center fs-4'>DÉVELOPPENT WEB</h2>
                            <p className="services__card-description text-center"> Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <u >HTML</u>, <u>CSS</u>, JavaScript et <u>PHP</u>.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='services__card px-4 d-flex flex-column align-items-center h-100'>
                            <i className="services__icon fa-solid fa-display m-4"/>
                            <h2 className='services__card-title mt-1 text-center fs-4'>RÉFÉRENCEMENT</h2>
                            <p className="services__card-description text-center"> Le <strong>référencement naturel d'un site</strong>, aussi appelé <u>SEO</u>, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Services;