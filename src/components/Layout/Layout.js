import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <ToolBar />
        <SideDrawer />
        <main className={classes.Content}>
          {this.props.children}
        </main>
        {/* <div>Aside</div> */}
      </Aux>
    );
  }
}

export default Layout;
