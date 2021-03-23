import React from "react";

const navigationItem = (props) => (
  <li className="item">
    <a href={props.url} className={props.active ? "active" : ""}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
