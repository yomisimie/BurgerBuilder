import PropTypes from "prop-types";
import React from "react";

const Ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "topBun":
      ingredient = (
        <div className="TopBun">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
          {props.children}
        </div>
      );
      break;
    default:
      ingredient = (
        <div title={props.label} className={props.label.split(" ").join("")}>
          {props.children}
        </div>
      );
      break;
  }

  return ingredient;
};

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
