import React from "react";
import logoPath from "./logo.svg";
import './logo.css'

const Logo = () => {
  return <img src={logoPath} className="logo animate-rotate" />;
};

export default Logo;
