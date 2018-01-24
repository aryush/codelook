import React from 'react';

import classes from './CardSection.css';

const cardSection = (props) => (
  <div className={classes.CardSection}>
    {props.children}
  </div>
);

export default cardSection;
