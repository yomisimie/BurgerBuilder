import React from "react";
import Logo from "../../assets/images/burger-logo.png";

const logo = (props) => (
  <div className="logo">
    <img src={Logo} alt="Burger Builder" />
  </div>
);

export default logo;
