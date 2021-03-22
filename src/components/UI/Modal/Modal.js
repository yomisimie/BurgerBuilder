import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Aux>
    <Backdrop close={props.modalClosed} show={props.show} />
    <div
      className="customModal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
