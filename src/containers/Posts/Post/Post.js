import React from 'react';

import Card from '../../../components/UI/Card/Card';
import CardSection from '../../../components/UI/CardSection/CardSection';
import Thumbnail from '../../../components/UI/Thumbnail/Thumbnail';
import Button from '../../../components/UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';

import postImg from '../../../assets/images/post.jpg';
import newPostImg from '../../../assets/images/postnew.jpg';
import classes from './Post.css';

const post = (props) => {
  return (
  <Aux>
    <Card width="800px">
      <CardSection>
        <Thumbnail
          rightShift="2px"
          radius="80px"
          height="80px"
          width="80px"
          top="8px"
        />
        <div className={classes.UserDetails}>
          <div className={classes.Label}>Aayush Garg</div>
          <div className={classes.Time}>20 hours ago</div>
        </div>
      </CardSection>
      <CardSection>
        <img
          style={{width: 800, height: 400}}
          src={postImg}
          alt="Post"
        />
      </CardSection>
      <CardSection>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Like
        </Button>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Comment
        </Button>
        <Button
          background="#fff"
          color="#000">Share
        </Button>
      </CardSection>
    </Card>
    <Card width="800px">
      <CardSection>
        <Thumbnail
          rightShift="2px"
          radius="80px"
          height="80px"
          width="80px"
          top="8px"
        />
        <div className={classes.UserDetails}>
          <div className={classes.Label}>Aayush Garg</div>
          <div className={classes.Time}>20 hours ago</div>
        </div>
      </CardSection>
      <CardSection>
        <img
          style={{width: 800, height: 400}}
          src={newPostImg}
          alt="Post"
        />
      </CardSection>
      <CardSection>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Like
        </Button>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Comment
        </Button>
        <Button
          background="#fff"
          color="#000">Share
        </Button>
      </CardSection>
    </Card>
    <Card width="800px">
      <CardSection>
        <Thumbnail
          rightShift="2px"
          radius="80px"
          height="80px"
          width="80px"
          top="8px"
        />
        <div className={classes.UserDetails}>
          <div className={classes.Label}>Aayush Garg</div>
          <div className={classes.Time}>20 hours ago</div>
        </div>
      </CardSection>
      <CardSection>
        <img
          style={{width: 800, height: 400}}
          src={postImg}
          alt="Post"
        />
      </CardSection>
      <CardSection>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Like
        </Button>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Comment
        </Button>
        <Button
          background="#fff"
          color="#000">Share
        </Button>
      </CardSection>
    </Card>
    <Card width="800px">
      <CardSection>
        <Thumbnail
          rightShift="2px"
          radius="80px"
          height="80px"
          width="80px"
          top="8px"
        />
        <div className={classes.UserDetails}>
          <div className={classes.Label}>Aayush Garg</div>
          <div className={classes.Time}>20 hours ago</div>
        </div>
      </CardSection>
      <CardSection>
        <img
          style={{width: 800, height: 400}}
          src={newPostImg}
          alt="Post"
        />
      </CardSection>
      <CardSection>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Like
        </Button>
        <Button
          background="#fff"
          color="#000"
          marginRight="40px">Comment
        </Button>
        <Button
          background="#fff"
          color="#000">Share
        </Button>
      </CardSection>
    </Card>
  </Aux>
  )
};

export default post;
