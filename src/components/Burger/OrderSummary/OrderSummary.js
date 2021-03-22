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
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
