import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <div className={classes.Icon}>
      <i className={`fa ${props.class}`} aria-hidden="true"></i>
    </div>
    <a
      className={props.active ? classes.active : null}
      href={props.link}>{props.children}</a>
  </li>
);

export default navigationItem;
