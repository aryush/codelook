import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Thumbnail from '../../UI/Thumbnail/Thumbnail';
import classes from './NavigationItems.css';

const navItems = [
  {name: 'Friends', class: 'fa-user', link: '/'},
  {name: 'Following', class: 'fa-users', link: '/'},
  {name: 'Followers', class: 'fa-address-book-o', link: '/'},
  {name: 'Recommendation Engine', class: 'fa-clipboard', link: '/'},
  {name: 'TimeLine', class: 'fa-calendar-check-o', link: '/'},
  {name: 'Live Competition', class: 'fa-laptop', link: '/'}
]

const navigationItems = (props) => (
  <ul className={classes.NavigationItems} style={{flexFlow: props.direction}}>
    <div className={classes.Thumbnail}>
      <Thumbnail
        rightShift="-20px"
        radius="40px"
        height="40px"
        width="40px"
      />
      <NavigationItem link="/" active >Aayush Garg</NavigationItem>
    </div>
    {navItems.map(items => (
      <NavigationItem
        key={items.name}
        class={items.class}
        link={items.link}
        >
        {items.name}
      </NavigationItem>
    ))}
    {/* <NavigationItem link="/"><i class="fa fa-user" aria-hidden="true"></i> Friends</NavigationItem>
    <NavigationItem link="/"><i class="fa fa-users" aria-hidden="true"></i> Following</NavigationItem>
    <NavigationItem link="/"><i class="fa fa-address-book-o" aria-hidden="true"></i> Followers</NavigationItem>
    <NavigationItem link="/"><i class="fa fa-clipboard" aria-hidden="true"></i> Recommendation Engine</NavigationItem>
    <NavigationItem link="/"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> TimeLine</NavigationItem>
    <NavigationItem link="/"><i class="fa fa-laptop" aria-hidden="true"></i> Live Competition</NavigationItem> */}
  </ul>
);

export default navigationItems;
