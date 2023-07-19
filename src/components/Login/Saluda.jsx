import React from "react";
import Salutacio from "./Salutacio.jsx";
import SalutacioConvidat from "./SalutacioConvidat.jsx";

const Saluda = (props) => {
    const isLoggedIn = props.isLoggedIn;
    let resposta = "";
    if(isLoggedIn){
        // Recuperacion desde Base de datos
        const usuari = "Renato";
        resposta = <Salutacio nick={usuari}/>
    } else {
        resposta = <SalutacioConvidat/>
    }
    return resposta;
}

export default Saluda;