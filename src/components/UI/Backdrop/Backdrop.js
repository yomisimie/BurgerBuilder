import React from "react";

const backdrop = (props) =>
  props.show && <div class="backdrop" onClick={props.close}></div>;

export default backdrop;
