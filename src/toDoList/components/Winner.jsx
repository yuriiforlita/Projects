import React from "react";

const Winner = ({ getWinnerUsers }) => {
  let getNames = getWinnerUsers.map(user => user.name);
  const newDada = getNames.join(",");
  const doneTasks =
    typeof getWinnerUsers[0] === "undefined" ? "" : getWinnerUsers[0].doneTasks;
  return (
    <div>
      <h3 className="text-center">
        Current winner is {newDada}. Done tasks :{doneTasks}
      </h3>
    </div>
  );
};
export default Winner;
