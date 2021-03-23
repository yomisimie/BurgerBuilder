import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header>
    <div className="container h-100">
      <div className="row text-center h-100">
        <div className="col-12 col-lg-4 h-100">
          <DrawerToggle click={props.drawerToggle} />
        </div>
        <div className="col-12 col-lg-4 h-100 p-1">
          <Logo />
        </div>
        <nav className="col-12 col-lg-4">
          <NavigationItems />
        </nav>
      </div>
    </div>
  </header>
);

export default toolbar;
