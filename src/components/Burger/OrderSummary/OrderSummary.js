import React from "react";
import Aux from "../../../hoc/Auxiliary";
import env from "../../../environment.json";

const orderSummary = (props) => {
  const ingredientSummary = env.INGREDIENTS.map((ingredient, index) => {
    if (ingredient.required) {
      return false;
    }
    const currentIngredient = props.ingredients.filter(
      (i) => i === ingredient.type
    ).length;
    return (
      currentIngredient > 0 && (
        <li key={index}>
          <span>{ingredient.label}</span>
          <strong> X {currentIngredient}</strong>
        </li>
      )
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <strong>Total price: {props.price}</strong>
      <p>Continue to checkout?</p>
      <button onClick={props.continueOrder} className="btn btn-primary">
        Continue
      </button>
      <button onClick={props.cancelOrder} className="btn btn-secondary">
        Cancel
      </button>
    </Aux>
  );
};

export default orderSummary;
