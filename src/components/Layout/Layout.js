import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aside from '../Aside/Aside';
import classes from './Layout.css';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <ToolBar />
        <div className={classes.Main}>
          <SideDrawer />
          <main className={classes.Content}>
            {this.props.children}
          </main>
          <Aside className={classes.Aside}/>
        </div>
      </Aux>
    );
  }
}

export default Layout;
