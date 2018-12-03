import React, { Fragment } from "react";

const TabName = ({ users, activeTabAndUserNow }) => {
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
          onClick={() => activeTabAndUserNow(item.id)}
        >
          {item.name}
        </a>
      ))}
    </Fragment>
  );
};
export default TabName;
