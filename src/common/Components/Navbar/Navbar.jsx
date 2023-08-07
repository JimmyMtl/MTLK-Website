import {useState} from 'react';

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const handleInputChange = () => {
        setShowMobileNav((precedentValue) =>
            !precedentValue
        )
    }
    return (
        <nav className={"containerNavbar"}>
            <div className="containerLarge">
                <div className="containerLogo"><img src="/logoFull.png" alt=""/></div>
                <div className={"containerLink"}>
                    <a className={"linkBtn"} href={"#Accueil"}>Accueil</a>
                    <a className={"linkBtn"} href={"#Services"}>Services</a>
                    <a className={"linkBtn"} href={"#Realisations"}>Réalisations</a>
                </div>
                <a className={"btn containerRDV"} href={"#Contact"}>Contactez-Nous</a>
            </div>
            <div className="containerMobile">
                <div className="containerLogo"><img src="/logoFull.png" alt=""/></div>
                <div className="containerBtnMobile">
                    <div className="btnMobile">
                        <label htmlFor="check">
                            <input type="checkbox" id="check" onChange={handleInputChange} value={showMobileNav}/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className={`containerMenu ${showMobileNav ? "containerActiveMenu" : "containerHiddenMenu"}`}>
                    <a className={"linkBtn"} href={"#Accueil"}>Accueil</a>
                    <a className={"linkBtn"} href={"#Services"}>Services</a>
                    <a className={"linkBtn"} href={"#Realisations"}>Réalisations</a>
                    <a className={"btn containerRDV"} href={"#Contact"}>Contactez-Nous</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
