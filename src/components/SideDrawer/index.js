import React from 'react';
import Backdrop from '../BackDrop';
import Logo from '../Logo';
import './style.css';

const sideDrawer = ({ open, closed }) => {
  let attachedClasses = 'SideDrawer Close';
  if (open) {
    attachedClasses = 'SideDrawer Open';
  }

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses} onClick={closed}>
        <div className="SideDrawerLogo">
          <Logo />
        </div>
        {/* navagaiton items go here */}
        <nav />
      </div>
    </>
  );
};

export default sideDrawer;
