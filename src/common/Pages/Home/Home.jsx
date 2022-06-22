import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faLaptop, faTreeCity} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className={"containerPage"}>
            <div className={"containerFirst"}>
                <div className="containerText">
                    <div>
                        <h1>Site Vitrine</h1>
                        <h1>Application Web</h1>
                        <h1>Assistance Informatique</h1>
                    </div>
                    <p>Du domaine du développement web à celui de l&apos;assistance informatique, nous accompagnons nos
                        clients jusqu&apos;à répondre complètement à leur besoin. Déplacement sur tout le Grand
                        Nancy.</p>
                    <div>
                        <a className={"btn btnHeader"} href="tel:+33695491398">+33 6 95 49 13 98</a>
                    </div>
                </div>

                <div className="containerImage"><img src="/assets/images/accueil.png" alt="Assistance IT"/></div>

            </div>
            <div className="containerServices">
                <h2>Nos prestations</h2>
                <div className="containerImage"><img src="/assets/images/services.png" alt="Assistance IT"/></div>
                <div className={"containerText"}>
                    <h2><FontAwesomeIcon icon={faTreeCity}/>Assistance PC & MAC</h2>
                    <p>Nous intervenons pour toute prestations informatiques aussi bien sur MAC que sur PC et sur
                        tout
                        le Grand Nancy.</p>
                    <h2><FontAwesomeIcon icon={faLaptop}/>Intervention</h2>
                    <p>Nous intervenons sur tous types de périphériques.</p>
                    <h2><FontAwesomeIcon icon={faCode}/>Développement</h2>
                    <p>Nous réalisons des missions en tant que freelance dans le domaine du développement web.
                        Allant du
                        simple site vitrine au développement d’API ou d’application web & native.</p>
                </div>
            </div>
            <div className="containerRealisations">
                <h2>Nos réalisations</h2>
                <h3>Création de Site Vitrine & Application Web</h3>
                <div className={"containerCards"}>
                    <div className="card">
                        <div className="contentCard">
                            <h4>Le Hameau de la Savouillane</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;