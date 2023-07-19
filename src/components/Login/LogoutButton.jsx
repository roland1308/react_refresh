import React from "react";

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutButton;