import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {data} from "../data.jsx";

export default function ProduitItem() {

    let {id}=useParams()

    const [produc, setProduc] = useState({});

    function getProduit() {
        let produit=data.find(item=>item.id===id)
        return produit
    }

    useEffect(() => {
        setProduc(getProduit())
    }, []);


    return (
        <main className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={`/${produc.image}`}  className={'img-fluid'} alt=""/>
                </div>
                <div className="col-md-6">
                    <h5>{produc.title}</h5>
                    <p className="display-6">{produc.description}</p>
                </div>
            </div>
        </main>
    )
}
