import React, { Component } from "react";
import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";
import Saluda from "./Saluda.jsx";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <span>
        <Saluda isLoggedIn={isLoggedIn} />
        {button}
      </span>
    );
  }
}

export default LoginControl;
