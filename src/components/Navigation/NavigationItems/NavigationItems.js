import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Thumbnail from '../../UI/Thumbnail/Thumbnail';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <div className={classes.Thumbnail}>
      <Thumbnail />
      <NavigationItem link="/" active>Aayush Garg</NavigationItem>
    </div>
    <NavigationItem link="/">Friends</NavigationItem>
    <NavigationItem link="/">Recommendator</NavigationItem>
    <NavigationItem link="/">Questions Solved</NavigationItem>
  </ul>
);

export default navigationItems;
