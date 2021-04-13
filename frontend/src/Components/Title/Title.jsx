import React from "react";
import "./title.scss";

const Title = () => {
  return (
    <div className="title">
      <h1>.szabó/olivér</h1>

      <div className="subtitle-container">
        <h2>front end developer / designer.</h2>
        <h3>Click the buttons below to be forwarded to my portfolio.</h3>
        <div className="a-flex">
          <a
            href="https://drive.google.com/file/d/1suJlKNL7SKnht1S2UYs8p_TUyvT_RhXJ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            PDF
          </a>

          <a
            href="https://docs.google.com/presentation/d/169t7LptZMsoLg7hiMBQBtBucWB2vDrTptaPfLJ-OEy4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Powerpoint
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
