import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop click={this.props.modalClosed} show={this.props.show} />
        <div
          className="customModal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
