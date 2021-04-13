import React from "react";
import "./art.scss";

const Art = (props) => {
  console.log(props);
  return (
    <div className="art">
      <h2>{props.a.title}</h2>
      <h3>{props.a.desc}</h3>

      <a href={props.a.url} target="_blank" rel="noreferrer">
        link to project
      </a>
    </div>
  );
};

export default Art;
