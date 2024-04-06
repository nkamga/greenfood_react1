import React from 'react'
import {Link} from "react-router-dom";

export default function ErrorPage() {
    return (
        <main className="container">

            <div className="row d-flex justify-content-center align-items-center" style={{height:'100vh'}}>{/* Tout ceci nous permet de centrer notre message d'erreur*/}
                <div className="col-6 text-center">
                    <h1>Page introuvable</h1>
                    <p>
                        cliquer <Link to="/">ICI</Link> pour revenir a la page d'acceuil. {/*ceci nous permet de creer des liens dans les pages de notre app*/}
                    </p>
                </div>
            </div>
        </main>

    )
}
