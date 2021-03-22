import React from "react";

const buildControl = (props) => (
  <div className="row">
    <div className="col-12 text-center">
      <button
        disabled={props.disable}
        className="btn btn-secondary"
        onClick={props.add}
      >
        Add {props.label}
      </button>
    </div>
    <div className="clearfix"></div>
  </div>
);

export default buildControl;
