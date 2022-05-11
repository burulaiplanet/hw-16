import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Swithc from '../UI/Swithc';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Swithc/>
      <Navigation  onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
