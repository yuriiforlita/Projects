import React, { Fragment } from "react";

const TabName = ({ users, currentTab }) => {
  console.log(users);
  return (
    <Fragment>
      {users.map((item, index) => (
        <a
          className="nav-item nav-link "
          id="nav-home-tab"
          data-toggle="tab"
          href={`#${item.id}`}
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          key={index}
          onClick={event => {
            event.preventDefault();
            currentTab(item.id);
          }}
        >
          {item.name}
        </a>
      ))}
    </Fragment>
  );
};
export default TabName;
