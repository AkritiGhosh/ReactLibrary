import React from "react";
import logoPath from "/logo.svg";
import "./logo.css";

const Logo = ({ mobile }) => {
  const w = mobile ? "w-7 h-auto" : "w-full h-full";
  return <img src={logoPath} className={`${w} logo animate-rotate`} />;
};

export default Logo;
