import React from 'react';

import userImg from '../../../assets/images/aayush.jpg';
import classes from './Thumbnail.css';

const thumbnail = (props) => (
  <div
    className={classes.Thumbnail}
    style={{marginRight: props.rightShift}}>
    <img
      src={userImg}
      alt="User Profile"
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.radius,
        marginTop: props.top
      }}
    />
  </div>
);

export default thumbnail;
