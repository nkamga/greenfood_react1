import React from 'react'
import {Link} from "react-router-dom";

export default function Carossel() {
    return (
        <main>
            <section className="container w-100 ">
                <div className="row row-gap-5">
                    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="false">
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/im8.jpg" className="d-block w-100"
                                     style={{height: '427px',filter: 'brightness(90%)'}} alt="..."/>
                                <div className="carousel-caption d-none d-md-block mb-5">
                                    <h1 style={{color:'rgb(237, 190, 80)'}}>DECOUVREZ DE NOUVELLES SAVEURS</h1>
                                    <Link className='btn' style={{color:'white',backgroundColor:'rgb(62, 214, 138)'}}>Commander Maintenant </Link>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <img src="images/im4.jpg" className="d-block w-100"
                                     style={{height: '427px',filter: 'brightness(55%)'}} alt="..."/>
                                <div className="carousel-caption d-none d-md-block mb-5">
                                    <h1 style={{color:'rgb(237, 190, 80)'}}>DECOUVREZ DE NOUVELLES SAVEURS</h1>
                                    <Link className='btn' style={{color:'white',backgroundColor:'rgb(62, 214, 138)'}}>Commander Maintenant </Link>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/im5.jpg"
                                     className="d-block w-100" style={{height: '427px',filter: 'brightness(55%)'}}
                                     alt="..."/>
                                <div className="carousel-caption d-none d-md-block mb-5">
                                    <h1 style={{color:'rgb(237, 190, 80)'}}>DECOUVREZ DE NOUVELLES SAVEURS</h1>
                                    <Link className='btn' style={{color:'white',backgroundColor:'rgb(62, 214, 138)'}}>Commander Maintenant </Link>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <img src="images/im6.jpg" className="d-block w-100"
                                     style={{height: '427px',filter: 'brightness(55%)'}} alt="..."/>
                                <div className="carousel-caption d-none d-md-block mb-5">
                                    <h1 style={{color:'rgb(237, 190, 80)'}}>DECOUVREZ DE NOUVELLES SAVEURS</h1>
                                    <Link className='btn' style={{color:'white',backgroundColor:'rgb(62, 214, 138)'}}>Commander Maintenant </Link>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <img src="images/im7.jpg" className="d-block w-100"
                                     style={{height: '427px', filter: 'brightness(55%)'}} alt="..."/>
                                <div className="carousel-caption d-none d-md-block mb-5">
                                    <h1 style={{color:'rgb(237, 190, 80)'}}>DECOUVREZ DE NOUVELLES SAVEURS</h1>
                                    <Link className='btn' style={{color:'white',backgroundColor:'rgb(62, 214, 138)'}}>Commander Maintenant </Link>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
