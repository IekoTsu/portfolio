import Heading from "../components/Heading";
import { articlesData } from "../db/data";


const Blog = () =>{
    return(
        <main>
            <div className="banner"/>
            <section className="p-5">
                <Heading title="BLOG" description="Rtrouvez ici quelques articles sur le développement web." />
                <div className="acricles__cards-container row g-2 ">
                    {articlesData.map((article) => (
                       <div className="col-lg-4 col-md-6 col-12">
                            <article class="card" >
                                <img src={article.imgSrc} class="card-img-top" />
                                <div class="card-body">
                                    <h2 class="card-title"> { article.title } </h2>
                                    <p class="card-text"> {article.description} </p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div className="card-footer text-center">
                                    <p>Publié le<time dateTime={article.date[0]} > {article.date[1]} </time></p>
                                </div>
                            </article>
                        </div> 
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Blog