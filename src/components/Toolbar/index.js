import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle';
import Logo from '../Logo';
import './style.css';

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo />
    {/* navagaiton items go here */}
  </header>
);

export default toolbar;
