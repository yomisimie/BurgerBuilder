import React from "react";

const backdrop = (props) =>
  props.show && <div className="backdrop" onClick={props.click}></div>;

export default backdrop;
