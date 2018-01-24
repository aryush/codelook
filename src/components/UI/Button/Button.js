import React from 'react';

import classes from './Button.css';

const button = (props) => (
  <button
    className={classes.Button}
    style={
      {
        marginTop: props.marginTop,
        marginRight: props.marginRight,
        borderRadius: props.borderRadius,
        padding: props.padding,
        background: props.background,
        color: props.color
      }}>
    {props.children}
  </button>
);

export default button;
