import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Thumbnail from '../../UI/Thumbnail/Thumbnail';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems} style={{flexFlow: props.direction}}>
    <div className={classes.Thumbnail}>
      <Thumbnail
        rightShift="20px"
        radius="50px"
        height="50px"
        width="50px"
      />
      <NavigationItem link="/" active>Aayush Garg</NavigationItem>
    </div>
    <NavigationItem link="/">Friends</NavigationItem>
    <NavigationItem link="/">Recommendator</NavigationItem>
    <NavigationItem link="/">Questions Solved</NavigationItem>
  </ul>
);

export default navigationItems;
