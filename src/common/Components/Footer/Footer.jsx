import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className={"containerFooter"}>
            <div className="containerFirstCol">
                <img src="/logo.png" alt="LogoMtlk"/>
                <p>Assistance informatique, développement logiciels et prévention sur la cybersecurité. Personnalisation
                    des besoins. Interventions sur tout le Grand Nancy.</p>
                <div className="containerLogos">
                    <a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                </div>
                <p className={"copyrightFirst"}>Copyright MTLK © 2022 Tous droits réservés</p>
            </div>
            <div className="containerSecondCol">
                <h4>Liens</h4>
                <div className="containerLinks">
                    <a className={"linkBtn"} href={"#Accueil"}>Accueil</a>
                    <a className={"linkBtn"} href={"#Services"}>Services</a>
                    <a className={"linkBtn"} href={"#Realisations"}>Réalisations</a>
                    <a className={"btn containerRDV"} href={"#Contact"}>Contactez-Nous</a>
                </div>
            </div>
            <div className="containerThirdCol">
                <h4>Contactez-Nous</h4>
                <a href="mailto:contact@mtlk.fr">
                    <h5><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>136 rue de
                        Mon Désert,<br/> 54000 Nancy</h5>
                </a>
                <a href="tel:+33695491398">
                    <h5><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+33 6 95
                        49 13 98</h5>
                </a>
                <a href="mailto:contact@mtlk.fr">
                    <h5><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>contact@mtlk.fr
                    </h5>
                </a>
                <p className={"copyrightSecond"}>Copyright MTLK © 2022 Tous droits réservés</p>

            </div>
        </div>
    );
};

export default Footer;
