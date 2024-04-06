import React, {useState} from 'react'
import './css/Contact.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import  emailjs from "@emailjs/browser";
import {toast} from "sonner";
import {NavLink} from "react-router-dom";

const schema = yup
    .object({
        nom: yup.string().required('Ce champ est obligatoire'),
        email: yup.string().required('Ce champ est obligatoire')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'entrer un email valide'),
        telephone: yup.string().required("ce champ est obligatoire")
            .matches(/^\+237\d{9}$/,'Entrer un numero valide'),
    })
    .required()

export default function Contact() {

    const [load, setLoad] = useState(false);

    const {
        register,
        reset,/* ceci me permet de reinitialiser le formulaire*/
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        setLoad( true)
        reset(); /* ceci me permet de reinitialiser le formulaire*/
        toast.success('Merci de nous avoir conctater, nous vous repondrons plutard')
        const templateParams = {
            nomClient: data.nom,
            emailClient: data.email,
            telClient:data.telephone,

        };

        emailjs.send('service_9zmkuxb', 'template_qaudbxn', templateParams,'cg1DaJpha8ZhXviPK').then(
            (response) => {
                setLoad(false) /*pour mettre un temps d'attente*/
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );

    }


    return (
        <main className="container-fluid contact mt-3">
            <div className="row">
                <div className="col-lg-6 col-md-6" style={{backgroundColor:'rgb(67, 204, 133)'}}>
                    <h3 className="text-center text-light mb-5 mt-3" style={{fontFamily: 'lobster sans-Serif' }}>RESERVEZ
                        EN LIGNE</h3>
                    <p className="text-center mb-5"
                       style={{backgroundColor:'black', color:'white', fontFamily:'lobster sans-Serif'}}>~ Entrez-vos
                        informations ~</p>

                    <form className="row g-3">
                        <div className="row g-3 mb-2">
                            <div className="col">
                                <label htmlFor="inputNom" className="form-label text-light"> Nom</label>
                                <input type="text" className="form-control bg-transparent text-light" id="inputNom"
                                       placeholder=" Votre nom" required/>
                            </div>
                            <div className="col">
                                <label htmlFor="inputEmail" className="form-label text-light">Email</label>
                                <input type="email" className="form-control bg-transparent text-light" id="inputEmail"
                                       placeholder=" Votre nom" required/>
                            </div>
                        </div>
                        <div className="row g-3 mb-2">
                            <div className="col">
                                <label className="form-label text-light"> Nombre de personne</label>
                                <select className="form-select bg-black bg-transparent" aria-label="Nombre de personne" required defaultValue="">
                                    <option disabled hidden>Nombre de personne</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>

                        <div className="row g-3 mb-2">
                            <div className="col">
                                <label htmlFor="inputZip" className="form-label text-light">Choisir une date</label>
                                <input id="inputZip" type="date" className="form-control bg-transparent text-light"
                                       placeholder="date" required/>
                            </div>
                            <div className="col">
                                <label htmlFor="heure" className="form-label text-light"> une heure</label>
                                <input type="time" id="heure" className="form-control bg-transparent text-light"
                                       placeholder="heure" aria-label="heure" required/>
                            </div>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn " style={{backgroundColor: 'black'}}>Reserver</button>
                        </div>
                    </form>
                </div>

                <div className="col-lg-6 col-md-6" style={{backgroundColor:'black', backgroundImage:'url(image/nav.png)'}}>

                    <h3 className="text-center text-light mb-5 mt-3">
                        CONTACTEZ-NOUS
                    </h3>

                    <p className="text-center mb-5 p-contact">
                        ~ Entrez-vos informations ~
                    </p>

                    <form  onSubmit={handleSubmit(onSubmit)} className="row g-3">
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="inputNom" className="form-label text-light"> Nom</label>
                                <input {...register("nom")}type="text" className="form-control bg-transparent text-light" id="inputNom"
                                />
                                <span className='text-danger'>{errors.nom?.message}</span>
                            </div>
                            <div className="col">
                                <label htmlFor="inputEmail" className="form-label text-light">Email</label>
                                <input {...register("email")}
                                       type="email"
                                       className="form-control bg-transparent text-light"
                                       id="inputEmail"
                                />
                                <span className='text-danger'>{errors.email?.message}</span>
                            </div>
                        </div>
                        <div className="row g-3 mb-2">
                            <div className="col-6">
                                <label htmlFor="numero" className="form-label text-light"> Numero</label>
                                <input {...register("telephone")}type="tel" className="form-control bg-transparent text-light"
                                       id="numero"/>
                                <span className ='text-danger'>{errors.telephone?.message}</span>
                            </div>

                        </div>
                        <button className='w-50 btn-contact mb-3 '>Envoyez</button>
                        {load &&
                            <div className='text-white'>
                                Envoi
                                <div className="spinner-grow spinner-grow-sm" role="status">
                                    <span className="visually-hidden text-white">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm" role="status">
                                    <span className="visually-hidden text-white">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm" role="status">
                                    <span className="visually-hidden text-white">Loading...</span>
                                </div>

                            </div>}
                    </form>
                </div>
            </div>
        </main>
    )
}
