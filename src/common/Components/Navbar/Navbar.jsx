import React from 'react';

const Navbar = () => {
    return (
        <nav className={"containerNavbar"}>
            <div className="containerLogo"><img src="/logoFull.png" alt=""/></div>
            <div className={"containerLink"}>
                <a className={"linkBtn"} href={"#Accueil"}>Accueil</a>
                <a className={"linkBtn"} href={"#Services"}>Services</a>
                <a className={"linkBtn"} href={"#Realisations"}>Réalisations</a>
            </div>
            <a className={"btn containerRDV"} href={"#Contact"}>Contactez-Nous</a>
        </nav>
    );
};

export default Navbar;
