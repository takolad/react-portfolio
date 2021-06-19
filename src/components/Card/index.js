import React from "react";
import "./style.css";

function Card({ content }) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{content.heading}</h2>
      </div>
      <div className="card-body">{content.body}</div>
    </div>
  );
}

export default Card;
