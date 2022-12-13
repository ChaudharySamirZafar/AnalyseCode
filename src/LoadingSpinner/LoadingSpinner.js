import React from "react";
import "./spinner.css";

const LoadingSpinner = (props) => {
  var containerStyleObject = [];
  var spinenrStyleObject = [];

  if (props.notFullSize === true) {
    containerStyleObject = { height: "auto", background: "#F2F2F2" };
    spinenrStyleObject = {
      border: "10px solid darkgrey",
      borderTop: "10px solid #373F68",
    };
  }

  return (
    <div className="spinner-container" style={containerStyleObject}>
      <div className="loading-spinner" style={spinenrStyleObject}></div>
    </div>
  );
};

export default LoadingSpinner;