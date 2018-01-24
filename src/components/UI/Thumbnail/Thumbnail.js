import React from 'react';

import userImg from '../../../assets/images/aayush.jpg';
import classes from './Thumbnail.css';

const thumbnail = (props) => (
  <div className={classes.Thumbnail}>
    <img src={userImg} alt="User Profile" />
  </div>
);

export default thumbnail;
