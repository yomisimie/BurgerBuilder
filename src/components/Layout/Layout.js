import React, { useState } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  return (
    <>
      <Toolbar drawerToggle={sideDrawerToggleHandler} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => sideDrawerClosedHandler()}
      />
      <main className="container" id="content">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
