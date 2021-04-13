import React from "react";
import Title from "../Title/Title";
import Art from "../Art/Art";
import Work from "../Work/Work";
import LoadingMask from "../LoadingMask/LoadingMask";
import { useState, useEffect } from "react";
import "./landing.scss";

const Landing = () => {
  const [art, setArt] = useState("");
  const [work, setWork] = useState("");
  const [loading, isLoading] = useState(false);

  const options = {
    "Content-Type": "application/json",
  };

  const fetchArt = () => {
    fetch("/api/art", options)
      .then((res) => res.json())
      .then((d) => setArt(d))
      .catch((e) => console.log(e));
  };
  const fetchWork = () => {
    fetch("/api/work", options)
      .then((res) => res.json())
      .then((d) => setWork(d))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setTimeout(() => {
      isLoading(true);
      fetchArt();
      fetchWork();
    }, 4000);
    isLoading(false);
  }, []);

  return (
    <div className="landing">
      <Title />
      <div id="about">
        <h2>About me:</h2>
        <p>
          I'm a junior front-end developer with backround in art. <br />
          Looking for people to share my work with.
        </p>
      </div>
      {loading ? (
        <>
          <h2 className="art-title">
            Here are some my works as an <span>independent artist</span>.
          </h2>
          {art
            ? art.map((a) => <Art key={a.title} a={a} />)
            : "Something went wrong."}

          <h2 className="codecool-title">
            Down below you can see some of my projects from{" "}
            <span>Codecool</span>.
          </h2>
          <h3 className="codecool-sub">
            All of these were done in a group of 3 to 4.
          </h3>
          {work
            ? work.map((w) => <Work key={w.title} w={w} />)
            : "Something went wrong."}
        </>
      ) : (
        <>
          <LoadingMask />
        </>
      )}
    </div>
  );
};

export default Landing;
