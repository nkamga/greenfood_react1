import React, {useState,useEffect} from 'react'
import backgroundImage from '/images/bgim1.webp';
import './css/Connexion.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {toast} from "sonner";


const schema = yup
    .object({
        nom:yup.string().required('ce champ en obligatoire'),

        email : yup.string().required('ce champ est obligatoire')
            .matches(/^[\w\.-]+@[\w\.-]+\.\w+$/,'entrer email une valide') ,

        password: yup.string().required('ce champ est obligatoire')
            .max(12, 'maximum 12 caracteres'),

    })
    .required()

export default function Inscription() {

    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const [load, setLoad] = useState(false);


        const onSubmit = (data) => {

            // Manipulation des données du formulaire

            reset(); /* ceci me permet de reinitialiser le formulaire*/

            // Récupérer les enregistrements précédents depuis le localStorage
            const storedData = localStorage.getItem('registrationData');
            const previousRecords = storedData ? JSON.parse(storedData) : [];

            // Ajouter le nouvel enregistrement aux enregistrements précédents
            const newRecords = [...previousRecords, data];

            // Stocker les enregistrements dans le localStorage
            localStorage.setItem('registrationData', JSON.stringify(newRecords));

            const userName = data.nom;

            const message = `Merci ${userName}, pour votre enregistrement sur notre site!`;

            setSuccessMessage(message);
        }

    const styles = {
        container: {
            backgroundImage: `url(${backgroundImage})`, // Utilisez l'image d'arrière-plan importée
            backgroundSize: 'cover', // Assurez-vous que l'image couvre toute la surface
            backgroundPosition: 'center', // Centrez l'image
            height: '84.5vh'// Hauteur de la page
            // Ajoutez d'autres styles si nécessaire
        },
    };


    return (
        <main className="container-fluid" style={styles.container}>

            {/*<Alert severity="success">
                <MsgDeBienvenue/>
            </Alert>*/}

            <div className="container  ">
                <div className="row" style={{height: '20%'}}>
                    <div className="col-lg-6 col-md-6 glassmorphism1 " >
                        <div style={{margin: '20%'}}>
                            <h4 style={{
                                fontFamily: 'lobster,sans-serif',
                                color: 'black',
                                textAlign: 'center'
                            }}>Green Food</h4>
                            <h1 className='pt-2' style={{
                                fontFamily: 'roboto,sans-serif',
                                color: 'black',
                                textAlign: 'center'
                            }}>BIENVENUE</h1>
                            <p className='pt-2'
                               style={{
                                   fontFamily: 'roboto,sans-serif',
                                   color: 'black',
                                   textAlign: 'center'
                               }}>Sur l'espace Inscription</p>
                        </div>
                    </div>
                    <div className="col-md-6 .col-lg-6 text-white glassmorphism" >

                        <h4 style={{fontFamily: 'roboto,sans-serif', textAlign: 'center', color:'white'}} className='mt-3'>
                            Inscription
                        </h4>
                        <form onSubmit={handleSubmit(onSubmit)} style={{margin: '10%'}}>
                            <span>
                                <input {...register("nom")} type="text" className="w-75 px-3"
                                       style={{ height: '40px'}}
                                       placeholder="Entrez votre nom"
                                />
                            </span>
                            <p style={{color:'red'}}>{errors.email?.message}</p><br/>
                            <span>
                                <input {...register("email")} type="email" className="w-75 px-3"
                                       style={{ height: '40px'}}
                                       placeholder='Entre votre email'/>
                            </span>
                            <p style={{color:'red'}}>{errors.email?.message}</p><br/>
                            <span>
                                <input {...register("password")} type="password" className="w-75 px-3"
                                       style={{ height: '40px'}} placeholder='Mot de passe'/>
                           </span>
                            <p style={{color:'red'}}>{errors.email?.message}</p><br/>
                            <button className="btn w-50 mt-3 mb-3" style={{
                                backgroundColor: 'white',
                                color: 'darkgreen',
                                borderRadius: '15px',
                                height: '50px'
                            }}>S'inscrire
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )

}

