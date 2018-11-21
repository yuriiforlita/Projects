import React from "react";
import imgLoading from "./imgs/GitHub-Mark.png";
import "./style.css";

const Loading = () => (
  <div className="imgLoading-mask">
    <img src={imgLoading} alt="loading..." className="imgLoading " />
  </div>
);
export default Loading;
