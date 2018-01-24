import React, { Component } from 'react';

import Card from '../../components/UI/Card/Card';
import CardSection from '../../components/UI/CardSection/CardSection';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Aux/Aux';

import classes from './UploadPost.css';

class UploadPost extends Component {
  render() {
    return (
      <Aux>
        <Card width="800px">
          <CardSection>
            <div className={classes.Content}>
              <input
                type="text"
                placeholder="What's on your mind..."
              />
              <div className={classes.ButtonContainer}>
                <Button
                  marginTop="10px"
                  marginRight="5px"
                  borderRadius="5px"
                  padding="10px 50px">
                  Post</Button>
                <Button
                  marginTop="10px"
                  borderRadius="5px"
                  padding="10px 50px">
                  Cancel</Button>
              </div>
            </div>
          </CardSection>
        </Card>
      </Aux>
    );
  }
}

export default UploadPost;
