import React from "react";
import { pickTextColorBasedOnBgColorAdvanced } from "../../../../helpers/Colors";

const buildControl = (props) => (
  <div className="row my-2">
    <div className="col-12 text-center">
      <button
        disabled={props.disable}
        className="btn btn-secondary"
        onClick={props.add}
        style={{
          backgroundColor: props.color,
          borderColor: props.color,
          color: pickTextColorBasedOnBgColorAdvanced(props.color),
          minWidth: "200px",
        }}
      >
        Add {props.label} <strong>+ €{props.price}</strong>
      </button>
    </div>
    <div className="clearfix"></div>
  </div>
);

export default buildControl;
