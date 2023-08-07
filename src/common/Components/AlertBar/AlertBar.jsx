import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWarning} from "@fortawesome/free-solid-svg-icons";

const AlertBar = () => {
    return (
        <div className={"alertBarContainer"}>
            <div className={"warningIconContainer"}>
                <FontAwesomeIcon icon={faWarning}/>
            </div>
            <div className={"warningContainer"}>
                <p>Bonjour, nous sommes temporairement fermés pour une durée indeterminée.</p><p>Aucune intervention ne
                pourra
                donc être réalisée.</p><p> Merci de votre compréhension et à bientôt !</p>
            </div>
        </div>
    );
};

export default AlertBar;