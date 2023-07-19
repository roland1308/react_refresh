import React from "react";

const FunctionalComponent = (props) => {
    return (
        <>
            <h1>Soc un component funcional</h1>
            <p>Prop 1: {props.prop1}</p>
            <p>Prop 2: {props.prop2}</p>
            <p>Prop 3: {props.prop3}</p>
            <p>Prop 4: {props.prop4.nom}</p>
            <p>Prop 4: {props.prop4.edad}</p>
        </>
    )
}

export default FunctionalComponent