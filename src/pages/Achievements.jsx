import Heading from "../components/Heading";
import {achievementData} from "../db/data.js";

const Achievements = () => {

    return(
        <main className='portfolio-page flex-grow-1 bg-light'>
            <div className="banner"/>
            <section className="portfolio-page__section p-5 mx-auto" style={ {maxWidth: '1200' + 'px'} }>
                <Heading title="PORTFOLIO" description="Voici quelques-unes de mes réalisations."/>
                <div className="portfolio-page__achievements-cards-container achievements__cards-container row g-4  justify-content-xl-center h-100 ">
                    { achievementData.map((achievement)=>(
                        <div className="col-12 col-md-6 col-lg-4 " key={achievement.id} >
                            <div className="portfolio-page__achievement-card card h-100" >                            
                                <img src={achievement.imgSrc} className="portfolio-page__achievement-img card-img-top" alt="..."/>
                                <div className="portfolio-page__achievement-body card-body  d-flex flex-column align-items-center ">
                                    <h2 className="portfolio-page__achievement-title card-title text-center">{ achievement.title }</h2>
                                    <p className="portfolio-page__achievement-description card-text text-center"> { achievement.description } </p>
                                    <a href="#" className="portfolio-page__achievement-link btn btn-outline-primary mt-auto">Voir</a>
                                </div>
                                <div className="card-footer ">
                                    <small> {achievement.usedTecnologies} </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Achievements;