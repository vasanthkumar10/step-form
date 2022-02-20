import React from "react";
import { Card } from "antd";
import "../css/userCard.css";

function UserCard({ title, content, icon, isActive, action }) {
  return (
    <Card onClick={action} className={`card ${isActive ? "active" : ""}`}>
      <img className="card-logo" src={icon} alt="card-icon"></img>
      <p className="card-title">{title}</p>
      <p className="card-content">{content}</p>
    </Card>
  );
}

export default UserCard;
