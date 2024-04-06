import React, {useState} from 'react'
import backgroundImage from '/images/bgim1.webp';
import './css/Connexion.css'
import {Link, Outlet} from "react-router-dom"; // Importez votre image
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {toast} from "sonner";


const schema = yup
    .object({
        email : yup.string().required('ce champ est obligatoire')
            .matches(/^[\w\.-]+@[\w\.-]+\.\w+$/,'entrer email une valide') ,
        password: yup.string().required('ce champ est obligatoire')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/, 'elle doit contenir des caracteres,des minuscules et majuscules')
            .max(12, 'maximum 12 caracteres'),

    })
    .required()
export default function Connexion() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        reset(); /* ceci me permet de reinitialiser le formulaire*/
        toast.success("Vous êtes connecté !");
    };

    const styles = {
        container: {
            backgroundImage: `url(${backgroundImage})`, // Utilisez l'image d'arrière-plan importée
            backgroundSize: 'cover', // Assurez-vous que l'image couvre toute la surface
            backgroundPosition: 'center', // Centrez l'image
            height:'84.5vh'// Hauteur de la page
            // Ajoutez d'autres styles si nécessaire
        },
    };

    return (
        <main className="container-fluid" style={styles.container}>
            <div className="container">
                <div className="row" style={{height:'20%'}}   >
                    <div className="col-lg-6 col-md-6 glassmorphism1">
                        <div style={{margin:'20%'}}>
                            <h4  style={{fontFamily:'lobster,sans-serif',color:'black',textAlign:'center'}}>Green Food</h4>
                            <h1 className='pt-2' style={{fontFamily:'roboto,sans-serif',color:'black',textAlign:'center'}}>BIENVENUE</h1>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className='pt-2' style={{fontFamily:'roboto,sans-serif',color:'black',textAlign:'center'}}>Sur l'espace de connexion</p>
                        </div>
                    </div>
                    <div className="col-md-6 .col-lg-6 glassmorphism">

                        <h4 style={{fontFamily:'roboto,sans-serif',textAlign:'center', color:'white'}} className='mt-5'>Connexion</h4>

                        <form onSubmit={handleSubmit(onSubmit)} style={{margin:'10%'}}>
                           <span>
                                <input {...register("email")}type="text" className="w-100  px-3" style={{height:'40px'}} placeholder='Votre email' />
                           </span>
                            <p style={{color:'red'}}>{errors.email?.message}</p><br/>
                            <span>
                                <input {...register("password")} type="password" className="w-100 px-3" style={{height:'40px'}} placeholder='Votre mot de passe'/>
                           </span>
                            <p style={{color:'red'}}>{errors.password?.message}</p><br/>
                            <button className="btn w-75" style={{backgroundColor:'forestgreen',borderRadius:'15px',height:'50px'}}>Connexion</button>
                        </form>

                        <Link to='/inscription' className='mb-5' style={{textDecoration:'underline'}}>Vous n'avez pas encore de compte </Link>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </main>
    )
}
