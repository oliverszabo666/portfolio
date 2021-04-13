import React from "react";
import "./loadingmask.scss";

const LoadingMask = () => {
  return (
    <div className="loading-mask">
      <div className="crop">
        <h2 className="top">Loading</h2>
        <h2 className="bottom">Loading</h2>
      </div>
    </div>
  );
};

export default LoadingMask;
