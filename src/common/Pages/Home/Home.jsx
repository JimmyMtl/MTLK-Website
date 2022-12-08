import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faLaptop, faTreeCity} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Home = () => {
    const [states, setStates] = useState({mail: "", tel: "", object: "", description: ""})
    const {mail, tel, object, description} = states;
    const handleChange = (e) => {
        setStates({
            ...states,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div className={"containerPage"}>
            <div className={"containerFirst"} id={"Accueil"}>
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
            <h2 className={"my-10 text-center"}>Nos prestations</h2>
            <div className="containerServices" id={"Services"}>
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
            <div className={"my-10 space-y-2"}>
                <h2>Nos réalisations</h2>
                <h3>Création de Site Vitrine & Application Web</h3>
            </div>
            <div className="containerRealisations" id={"Realisations"}>
                <div className={"containerCards"}>
                    <div className="card">
                        <div className="contentCard">
                            <div className="containerImage">
                                <img src="/assets/images/logos/hameau-de-la-savouillane.png"
                                     alt="Hameau de la Savouillane"/>
                            </div>
                            <h4>Le Hameau de la Savouillane</h4>
                            <p>Site web vitrine présentant les différentes activités du Hameau de la Savouillane situé à
                                Buis-les-Baronnies.</p>
                            <a href="https://hameau-de-la-savouillane.com" target="_blank" className="btn"
                               rel="noreferrer" >Visiter</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="contentCard">
                            <div className="containerImage">
                                <img src="/assets/images/logos/club.png" height={10} alt="Club AtouTalent"/>
                            </div>
                            <h4>Club AtouTalent</h4>
                            <p>Application web facilitant la relation entreprises-étudiants. Création d’un moteur de
                                recherche sur les formations en Grand Est.</p>
                            <a href="https://clubatoutalent.fr" rel="noreferrer" target="_blank"
                               className="btn">Visiter</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="contentCard">
                            <div className="containerImage">
                                <img src="/assets/images/logos/mtlk.png" alt="MTLK"/>
                            </div>
                            <h4>MTLK IT</h4>
                            <p>Site web vitrine présentant les différentes activités de l’entreprise MTLK
                                Informatique.</p>
                            <a href="https://mtlk.fr" target="_blank" rel="noreferrer" className="btn">Visiter</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerContact" id={"Contact"}>
                <h2>Nous contacter</h2>
                <h3>Une question ? Besoin d&apos;un devis ? Contactez-nous !</h3>
                <form className="containerForm" action="https://formsubmit.co/30b76927fbbcd60b3835eec238923d8f"
                      method="POST">
                    <div className={"containerLabelInput"}>
                        <label htmlFor="mail">Adresse Mail</label>
                        <input type="mail" name="mail" id="mail" value={mail} onChange={handleChange}
                               placeholder={"Votre adresse mail..."} required/>
                    </div>
                    <div className={"containerLabelInput"}>
                        <label htmlFor="tel">Numéro de Téléphone</label>
                        <input type="number" name="tel" id="tel" value={tel} onChange={handleChange}
                               placeholder={"Votre numéro de téléphone..."} required/>
                    </div>
                    <div className={"containerLabelInput"}>
                        <label htmlFor="object">Objet</label>
                        <input type="text" name="object" id="object" value={object} onChange={handleChange}
                               placeholder={"L'objet de votre demande..."}
                               required/>
                    </div>
                    <div className={"containerLabelInput"}>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description"
                                  placeholder={"Decrivez-nous en quelques lignes votre besoin..."} value={description}
                                  onChange={handleChange} required/>
                    </div>
                    <button className={"btn"} type={"submit"}>Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
