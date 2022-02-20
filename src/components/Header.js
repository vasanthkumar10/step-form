import React from "react";
import "../css/header.css";

function Header({ title, subTitle }) {
  return (
    <div className="header-wrapper">
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subTitle}</h3>
    </div>
  );
}

export default Header;
