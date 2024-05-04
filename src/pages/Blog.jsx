import Heading from "../components/Heading";
import { articlesData } from "../db/data";


const Blog = () =>{
    return(
        <main className='blog-page flex-grow-1 bg-light'>
            <div className="banner"/>
            <section className="blog-page__section p-5 mx-auto" style={ {maxWidth: '1100' + 'px'} }>
                <Heading title="BLOG" description="Rtrouvez ici quelques articles sur le développement web." />
                <div className="blog-page__articles-cards-container acricles__cards-container row g-2 h-100 ">
                    {articlesData.map((article) => (
                       <div className="col-lg-4 col-md-6 col-12" key={article.id}>
                            <article className="blog-page__article card h-100" >
                                <img src={article.imgSrc} className="blog-page__article-img card-img-top" alt={article.alt} />
                                <div className="blog-page__article-body card-body d-flex flex-column align-items-start">
                                    <h2 className="blog-page__article-title card-title"> { article.title } </h2>
                                    <p className="blog-page__article-description card-text"> {article.description} </p>
                                    <a href="#" className="blog-page__article-link btn btn-primary mt-auto">Lire la suite</a>
                                </div>
                                <div className="blog-page__article-footer card-footer text-center">
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