import React from 'react'
import {NavLink} from "react-router-dom";
import {RiUserFill} from "react-icons/ri";
import {TiShoppingCart} from "react-icons/ti";
import {FaSearch} from "react-icons/fa";
import './css/Navbar.css'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg sticky-top shadow" style={{backgroundColor:' rgb(255, 250, 255)'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand rounded px-3" to="/">
                    <img src="images/logog.png" alt="" style={{height: '120px', width: '190px'}}/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item px-3">
                            <NavLink className={({isActive}) => isActive ? 'nav-link actives' : 'nav-link'}
                                     aria-current="page" to="/">Accueil</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className={({isActive}) => isActive ? 'nav-link actives' : 'nav-link'}
                                     to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className={({isActive}) => isActive ? 'nav-link actives' : 'nav-link'}
                                     to="/recette">Recette</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className={({isActive}) => isActive ? 'nav-link actives' : 'nav-link'}
                                     to="/actualites">
                                Actualités
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className={({isActive}) => isActive ? 'nav-link actives' : 'nav-link'}
                                     to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className={({isActive}) => isActive ? 'nav-link actives' : 'nav-link'}
                                     to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex position-relative" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <span className='position-absolute bottom-0 end-0'>
                           <FaSearch style={{height: '30px', width: '30px', color: 'black',backgroundColor:'white'}}/>
                        </span>
                    </form>
                    <NavLink className="nav-link mx-3 " to="/connexion">
                        <RiUserFill style={{height: '30px', width: '30px', color: 'black',backgroundColor:'white'}}/>
                    </NavLink>
                    <TiShoppingCart style={{height: '30px', width: '30px', color: 'black',backgroundColor:'white'}} />

                </div>
            </div>
        </nav>

    )
}
