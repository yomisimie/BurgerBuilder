import React, { Component } from "react";
import PropTypes from "prop-types";

class Ingredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "buttonBun":
        ingredient = <div className="BunBottom"></div>;
        break;
      case "topBun":
        ingredient = (
          <div className="BunTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
            {this.props.children}
          </div>
        );
        break;
      case "middleBun":
        ingredient = <div className="BunMiddle">{this.props.children}</div>;
        break;
      case "meat":
        ingredient = <div className="Meat">{this.props.children}</div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese">{this.props.children}</div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon">{this.props.children}</div>;
        break;
      case "salad":
        ingredient = <div className="Salad">{this.props.children}</div>;
        break;
      default:
        ingredient = null;
        break;
    }

    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
