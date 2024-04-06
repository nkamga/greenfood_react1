import React from 'react'
import {Link} from "react-router-dom";
import {TiShoppingCart} from "react-icons/ti";
import {MdStarRate} from "react-icons/md";

export default function Card1({produit}) {
    return (
        <div className="card " style={{width:'260px',height:'470px', border:'none'}} >
            <img src={produit.image} className="card-img-top" alt="..." style={{height:'220px'}}/>
            <div className="card-body">

                <h5 className="card-title"> {produit.title}</h5>
                <div className="hstack">
                    <p className='fw-bold'>{produit.categorie}</p>
                    <p className='ms-auto fw-bold'>{produit.prix} FCFA</p>
                </div>
                <div className="hstack">
                    <Link to={`/produit/${produit.id}`} className="btn" style={{ backgroundColor: 'rgb(74, 214, 144)', color: 'white'}}>Voir plus</Link>
                    <span className='btn ms-auto'>
                        <TiShoppingCart style={{height: '30px', width: '30px', color: 'black',backgroundColor:'white'}} />
                    </span>
                </div>
            </div>
        </div>
    )
}
