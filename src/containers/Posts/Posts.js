import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Post from './Post/Post';

class Posts extends Component {

  render() {
    return (
      <Aux>
        <Post />
      </Aux>
    );
  }
}

export default Posts;
