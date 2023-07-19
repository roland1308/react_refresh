import React, { Component } from "react";

class ClassComponent extends Component {

    // definim al contrusctor para recuperar als props
    constructor(props) {
        super(props); // crida al contructor del pare

    }
    render() {
        return (
            <>
            <h1>Soc un component de clase</h1>
            <p>Prop 1: {this.props.prop1}</p>
            <p>Prop 2: {this.props.prop2}</p>
            <p>Prop 3: {this.props.prop3}</p>
            <p>Prop 4: {this.props.prop4.nom}</p>
            <p>Prop 4: {this.props.prop4.edad}</p>
        </>
        );
    }
}

export default ClassComponent