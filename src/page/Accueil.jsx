import React from 'react'
import Card from "../components/Card.jsx";
import {data} from "../data.jsx";
import Carossel from "../components/Carossel.jsx";
import MultiSlider from "../components/MultiSlider.jsx";

export default function Accueil() {
    return (
        <main className="container-fluid mt-4">
            <Carossel/>
            <section className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-5 mb-3">
                        <h2 style={{fontFamily:'Playfair,sans-serif', margin:'10%'}}>DES MENUS PLEINES DE COULEURS SIMPLES POUR TOUS LES REPAS ET TOUS LES GOÛTS !</h2>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <img src="images/im3.jpeg" className="img-thumbnail" alt="" style={{width:'200px',height:'350px'}}/>
                        <img src="images/Croque-madame-au-saint-nectaire-et-aux-epinards.jpg" className="img-thumbnail" alt="" style={{width:'300px',height:'390px'}}/>
                        <img src="images/Plat végan4.jpeg" className="img-thumbnail" alt="" style={{width:'250px',height:'290px'}}/>
                    </div>
                </div>
            </section >
            <section>
                <div className="container-fluid mt-4 mb-3">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 ">

                            <h2 className=" mt-3" style={{color:'rgb(237, 190, 80)',fontFamily:'lobster, sans-serif'}}>Voyagez au travers de vos assiettes</h2>
                            <p className="fs-4 pt-4 text-justify"
                               style={{fontFamily: 'Playfair,sans-serif'}}>
                                Le restaurant GreenFood, à la
                                rencontre des herbes et des épices d'ici et d'ailleurs, vous invite à faire un
                                voyage culinaire en direction de tous les pays du monde.<br/>
                                Dégustez des plats sains, savoureux et équilibrés entre amis, en famille ou en couple,
                                accompagnés de bons cocktails et finissant le voyage sur un dessert de votre
                                choix. <br/> Des repas surprenant faite d'amour et de folie vous attendent
                                pour passer un agréable moment de détente.
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 my-auto">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="5000">
                                        <img src="images/cocktail3.jpeg" className="d-block w-100"
                                             style={{height: '350px'}} alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <img src="images/cocktail4.jpeg" className="d-block w-100"
                                             style={{height: '350px'}} alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <img src="images/cocktail1.jpeg" className="d-block w-100"
                                             style={{height: '350px'}} alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <img src="images/cocktail11.jpeg" className="d-block w-100"
                                             style={{height: '350px'}} alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <img src="images/cocktail2.jpeg" className="d-block w-100"
                                             style={{height: '350px'}} alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="5000">
                                        <img src="images/cocktail8.jpeg" className="d-block w-100"
                                             style={{height: '350px'}} alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 style={{textAlign:'center',color:'rgb(237, 190, 80)',fontFamily:'lobster,sans-serif'}} className='mb-5 mt-5'>Nos Plats Les Plus Populaires du Moment</h1>
                <MultiSlider/>
            </section>
            <section className='mb-5 mt-5'>
                <h1 style={{textAlign:'center',color:'rgb(237, 190, 80)',fontFamily:'lobster,sans-serif'}} className='mt-3 mb-3'>Toute l'actualité dans notre cuisine</h1>

                <div className=" row container-fluid">
                    <div className="card text-bg-light mb-4  locaux"
                         style={{backgroundImage: 'url(images/Restaurant2.jpeg)', backgroundSize: 'cover'}}>
                        <div className="card-header text-white fs-5">Découvrez Egalement :</div>
                        <div className="card-body">
                            <h5 className="card-title text-white fs-3">Nos Locaux les Plus Conviviaux</h5>
                            <p className="card-text text-white mt-3">Some quick example text to build on the card title
                                and make up the bulk of the card's content.</p>
                            <a href="pages/blog/blog.html#locaux">
                                <button type="button" className="btn btn-success">Visiter</button>
                            </a>
                        </div>
                    </div>
                    <div className="card text-bg-light mb-4  chefs"
                         style={{backgroundImage: 'url(image/chef2.jpeg)', backgroundSize: 'cover'}}>
                        <div className="card-header text-black fs-5">Découvrez Egalement :</div>
                        <div className="card-body">
                            <h5 className="card-title text-black fs-3">Nos Chefs Les Plus Prestigieux</h5>
                            <p className="card-text text-black mt-3">Some quick example text to build on the card title
                                and make up the bulk of the card's content.</p>
                            <a href="pages/blog/blog.html#chefs">
                                <button type="button" className="btn btn-success">Visiter</button>
                            </a>
                        </div>
                    </div>
                    <div className="card text-bg-light mb-4  Evènements"
                         style={{backgroundImage: 'url(image/Evènement3.jpeg)', backgroundSize: 'cover'}}>
                        <div className="card-header text-white fs-5">Découvrez Egalement :</div>
                        <div className="card-body">
                            <h5 className="card-title text-white fs-3">Nos Evènements</h5>
                            <p className="card-text text-white mt-3">Some quick example text to build on the card title
                                and make up the bulk of the card's content.</p>
                            <a href="pages/blog/blog.html#Evènements">
                                <button type="button" className="btn btn-success">Visiter</button>
                            </a>
                        </div>
                    </div>
                    <div className="card text-bg-light mb-4  Livraison"
                         style={{backgroundImage: 'url(image/Livraison1.jpeg)',backgroundSize: 'cover'}}>
                        <div className="card-header text-white fs-5">Découvrez Egalement :</div>
                        <div className="card-body">
                            <h5 className="card-title text-white fs-3">Nos Services De Livraison</h5>
                            <p className="card-text text-white mt-3">Some quick example text to build on the card title
                                and make up the bulk of the card's content.</p>
                            <a href="pages/blog/blog.html#Livraison">
                                <button type="button" className="btn btn-success">Visiter</button>
                            </a>
                        </div>
                    </div>
                    <div className="card text-bg-light mb-4  Réductions"
                         style={{backgroundImage: 'url(image/Réduction1.jpeg)',backgroundSize: 'cover'}}>
                        <div className="card-header text-black fs-5">Découvrez Egalement :</div>
                        <div className="card-body">
                            <h5 className="card-title text-black fs-3">Nos Réductions</h5>
                            <p className="card-text text-black mt-3">Some quick example text to build on the card title
                                and make up the bulk of the card's content.</p>
                            <a href="pages/blog/blog.html#Réduction">
                                <button type="button" className="btn btn-success">Visiter</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>

        </main>
    )
}
