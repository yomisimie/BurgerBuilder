import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = (props) => {
  let attachedClasses = "sideDrawer closed";
  if (props.open) {
    attachedClasses = "sideDrawer open";
  }
  return (
    <Aux>
      <Backdrop show={props.open} click={props.closed} />
      <div className={attachedClasses}>
        <div style={{ height: 72 }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
