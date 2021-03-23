import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className="navigation">
    <NavigationItem link="/" active>
      Burger builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
