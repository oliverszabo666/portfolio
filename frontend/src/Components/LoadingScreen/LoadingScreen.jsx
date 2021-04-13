import React from "react";
import "./loadingscreen.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="crop">
        <div>
          <span>Loading...</span>
          <span>24%</span>
          <span>48%</span>
          <span>72%</span>
          <span>96%</span>
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
