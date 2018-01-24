import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import UploadPost from './containers/UploadPost/UploadPost';
import Posts from './containers/Posts/Posts';

class App extends Component {
  render() {
    return (
      <Layout>
        <UploadPost />
        <Posts />
      </Layout>
    );
  }
}

export default App;
