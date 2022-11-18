import React from "react";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop click={props.modalClosed} show={props.show} />
      <div
        className="customModal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
