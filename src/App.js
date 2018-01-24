import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Posts from './containers/Posts/Posts';

class App extends Component {
  render() {
    return (
      <Layout>
        <Posts />
      </Layout>
    );
  }
}

export default App;
