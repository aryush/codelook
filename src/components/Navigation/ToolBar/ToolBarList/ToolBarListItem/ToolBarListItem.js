import React from 'react';

import classes from './ToolBarListItem.css';

const toolBarListItem = (props) => (
  <li className={classes.ToolBarListItem}>
    <a
      className={props.active ? classes.active : null}
      href={props.link}>{props.children}</a>
  </li>
);

export default toolBarListItem;
