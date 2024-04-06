import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

export default function Root() {
    return (
        <>
          <Navbar/>
          <Outlet/>
        </>
    )
}
