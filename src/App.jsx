import React, {Fragment} from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import Accueil from "./page/Accueil.jsx";
import Contact from "./page/Contact.jsx";
import Connexion from "./page/Connexion.jsx";
import Inscription from "./page/Inscription.jsx";
import Blog from "./page/Blog.jsx";
import Menu from "./page/Menu.jsx";
import Recette from "./page/Recette.jsx";
import ErrorPage from "./page/ErrorPage.jsx";
import ProduitItem from "./page/ProduitItem.jsx";
import Actualites from "./page/Actualites.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "",
                element: <Accueil/>,
            },
            {
                path: "Contact",
                element: <Contact/>,
            },
            {
                path: "connexion",
                element: <Connexion/>,
            },
            {
                path: "actualites",
                element: <Actualites/>,
            },
            {
                path: "inscription",
                element: <Inscription/>,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
            {
                path: "menu",
                element: <Menu/>,
            },
            {
                path: "recette",
                element: <Recette/>,
            },
            {
                path: "produit/:id",
                element: <ProduitItem/>,
            },

        ]
    },
]);
export default function App() {





    return (
        <RouterProvider router={router} />
    )
}
