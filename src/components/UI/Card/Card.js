import React from 'react';

import classes from './Card.css';

const card = (props) => (
  <div
    className={classes.Card}
    style={{width: props.width, height: props.height}}>
    {props.children}
  </div>
);

export default card;
