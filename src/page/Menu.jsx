import React, {useState} from 'react'
import {data} from "../data.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Menu() {

    const menuItems=[...new  Set  (data.map((val) => val.categorie))]

    const [produit, setProduit] =useState(data);

    const filterItems = (cat)=>{
        const newItems=data.filter((newVal)=>newVal.categorie === cat)
        setProduit(newItems)
    }

    return (
        <main style={{backgroundColor:' rgb(255, 250, 247)'}}>
            <section>
                <div className="card text-center" style={{backgroundImage:'url(images/banniere.jpg)',backgroundSize:'cover',height:'300px'}}>
                    <div style={{height:'100vh'}}>
                        <h1 className="card-title" style={{color:'rgb(237, 190, 80)'}}>Les délices du Green Food</h1>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='text-center mt-4' style={{fontFamily:'lobster,sans-serif'}}>Menu</h1>
                <Button
                    menuItems={menuItems}
                    filterItems={filterItems}
                    setProduit={setProduit}
                />

                <div className="row">

                    {
                        produit.map((item,index) => {
                            return(
                                <div className='col-lg-3 col-md-6 g-4' key={index}>
                                    <Card
                                        produit={item}
                                    />
                                </div>

                            )}
                        )
                    }
                </div>
            </section>
        </main>
    )
}
