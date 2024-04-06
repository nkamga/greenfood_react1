import React from 'react'
import {data} from "../data.jsx";
import Card from "../components/Card.jsx";

export default function Recette() {
    return (
        <main style={{backgroundColor:' rgb(255, 250, 247)'}}>
            <section>
                <div className="card text-center" style={{backgroundImage:'url(images/banniere.jpg)',backgroundSize:'cover',height:'300px'}}>
                    <h1 className="card-title" style={{color:'rgb(237, 190, 80)',height:'100vh'}}>Les délices du Green Food</h1>
                </div>
            </section>
            <section>

            </section>
            <section className='container'>
                <h1 className='text-center mt-4' style={{fontFamily:'lobster,sans-serif'}}>Les Delices du Green Food</h1>

                <div className="row">

                    {
                        data.map((item,index) => {
                            return(
                                <div className='col-lg-3 col-md-3 g-3' key={index}>
                                    <Card
                                        produit={item}                                    />
                                </div>

                            )}
                        )
                    }
                </div>
            </section>
        </main>
    )
}
