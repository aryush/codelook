import React from 'react';

import ToolBarListItem from './ToolBarListItem/ToolBarListItem';
import Thumbnail from '../../../UI/Thumbnail/Thumbnail';
import classes from './ToolBarList.css';

const toolBarList = (props) => (
  <ul className={classes.ToolBarList}>
    <ToolBarListItem link="/">Home</ToolBarListItem>
    <ToolBarListItem link="/">Ranking</ToolBarListItem>
    <ToolBarListItem link="/">Posts</ToolBarListItem>
    <div className={classes.Thumbnail}>
      <Thumbnail
        rightShift="2px"
        radius="30px"
        height="30px"
        width="30px"
        top="8px"
      />
      <ToolBarListItem link="/" active>Aayush</ToolBarListItem>
    </div>
  </ul>
);

export default toolBarList;
