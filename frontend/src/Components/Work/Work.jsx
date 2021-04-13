import React from "react";
import "./work.scss";

const Work = (props) => {
  console.log(props);
  return (
    <div className="work">
      <h2>{props.w.title}</h2>
      <h3>{props.w.desc}</h3>

      <p>{props.w.content}</p>

      <a href={props.w.url} target="_blank" rel="noreferrer">
        Link to project
      </a>
    </div>
  );
};

export default Work;
