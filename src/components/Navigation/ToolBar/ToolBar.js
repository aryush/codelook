import React from 'react';

import ToolBarList from './ToolBarList/ToolBarList';
import classes from './ToolBar.css';

const toolBar = (props) => (
  <header className={classes.ToolBar}>
    <div className={classes.Logo}>
      Code<span>Look</span>
    </div>
    <input type="text" placeholder="Search" />
    <nav>
      <ToolBarList />
    </nav>
  </header>
);

export default toolBar;
