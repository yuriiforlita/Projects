import React from "react";
import "./style.css";

const UserInfo = props => (
  <div className="user">
    <h2 className="user_name">Owner:</h2>
    <img alt="avatar" className="user_logo" src={props.info} />
  </div>
);

export default UserInfo;
