import React from "react";
import env from "../../../environment.json";
import Control from "./Control/Control";

const buildControls = (props) => (
  <div className="jumbotron text-center">
    <h1
      className={
        "inline" + (props.purchasable ? " text-success" : " text-danger")
      }
    >
      € {props.price}
    </h1>
    {env.INGREDIENTS.map((control, index) => {
      if (control.required) {
        return false;
      }
      return (
        <Control
          key={control.label}
          label={control.label}
          color={control.color}
          price={control.price}
          add={() => props.addIngredient(control.type)}
          disable={props.limitReached}
        />
      );
    })}
    <hr />
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
