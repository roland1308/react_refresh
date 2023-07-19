import React, { Component } from "react";
import logo from "../img/qx7jYSYm_400x400.jpg";
import LoginControl from "./Login/LoginControl";

import "./Header.css";

//Component de class
class Header extends Component {
  render() {
    var nom = "Renato";
    return (
      <h1 className="salutacio">
        <img src={logo} alt="logo" height="50px" /> El teu portal de muntanya. <LoginControl nick={nom} />
      </h1>
    );
  }
}

//Exportem el component
export default Header;
