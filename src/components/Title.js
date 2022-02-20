import React from "react";
import ActiveLogo from "../icons/logoColored.svg";
import "../css/title.css";

function Title() {
  return (
    <div className="title-wrapper">
      <img src={ActiveLogo} alt={"logo"} className="logo" />
      <span className="logo-title">Eden</span>
    </div>
  );
}

export default Title;
