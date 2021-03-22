import React from "react";
import Control from "./Control/Control";
import env from "../../../environment.json";

const buildControls = (props) => (
  <div className="jumbotron">
    <h1 className="text-center">€ {props.price}</h1>
    {env.INGREDIENTS.map((control, index) => {
      if (control.required) {
        return false;
      }
      return (
        <Control
          key={control.label}
          label={control.label}
          add={() => props.addIngredient(control.type)}
          disable={props.limitReached}
        />
      );
    })}
    <div className="text-center">
      <button
        className="btn btn-success text-uppercase"
        disabled={!props.purchasable}
        title={
          props.purchasable ? "Order now!" : "Too few or too many ingredients"
        }
        onClick={props.ordered}
      >
        Order now
      </button>
    </div>
  </div>
);

export default buildControls;
