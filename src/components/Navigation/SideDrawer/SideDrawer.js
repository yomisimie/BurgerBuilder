import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  let attachedClasses = "sideDrawer closed";
  if (props.open) {
    attachedClasses = "sideDrawer open";
  }
  return (
    <>
      <Backdrop show={props.open} click={props.closed} />
      <div className={attachedClasses}>
        <div style={{ height: 72 }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
