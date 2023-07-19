import React from "react";

const LoginButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-success">
      Login
    </button>
  );
};

export default LoginButton;