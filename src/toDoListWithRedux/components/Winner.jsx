import React from "react";
import "./style.css";

const Winner = ({ getWinnerUsers }) => {
  let getNames = getWinnerUsers.map(user => user.name);
  const newDada = getNames.join(",");
  const doneTasks =
    typeof getWinnerUsers[0] === "undefined" ? "" : getWinnerUsers[0].doneTasks;
  return (
    <div className="text-center w-100 pt-3">
      <h4 className="text-center">
        Current winner is {doneTasks !== 0 ? newDada : "(NO WINNER)"}.
      </h4>
      <h4 className="text-center">Done tasks :{doneTasks}</h4>
    </div>
  );
};
export default Winner;
