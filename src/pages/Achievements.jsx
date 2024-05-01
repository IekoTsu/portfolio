import Heading from "../components/Heading";
import {achievementData} from "../db/data.js";

const Achievements = () => {

    return(
        <main>
            <div className="banner"/>
            <section className="p-5  ">
                <Heading title="PORTFOLIO" description="Voici quelques-unes de mes réalisations."/>
                <div className="achievements__cards-container row g-4  justify-content-xl-center ">
                    { achievementData.map((achievement)=>(
                        <div className="col-12 col-md-6 col-lg-4 " key={achievement.key} >
                            <div className="card" >                            
                                <img src={achievement.imgSrc} className="card-img-top" alt="..."/>
                                <div className="card-body d-flex flex-column align-items-center">
                                    <h2 className="card-title text-center">{ achievement.title }</h2>
                                    <p className="card-text text-center"> { achievement.description } </p>
                                    <a href="#" className="btn btn-outline-primary">Voir</a>
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