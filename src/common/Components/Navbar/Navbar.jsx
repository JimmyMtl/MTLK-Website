import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={"containerNavbar"}>
            <div className="containerLogo"><img src="/logoFull.png" alt=""/></div>
            <div className={"containerLink"}>
                <Link className={"linkBtn"} to={"#Accueil"}>Accueil</Link>
                <Link className={"linkBtn"} to={"#Services"}>Services</Link>
                <Link className={"linkBtn"} to={"#Réalisations"}>Réalisations</Link>
                <Link className={"linkBtn"} to={"#Contact"}>Contact</Link>
            </div>
            <Link className={"btn containerRDV"} to={"#test"}>Prendre Rendez-Vous</Link>
        </nav>
    );
};

export default Navbar;