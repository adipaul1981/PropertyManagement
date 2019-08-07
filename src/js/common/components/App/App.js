import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SMALL } from 'material-ui/utils/withWidth';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeDefault from '../../../../theme-default';
import Header from '../Header1/Header';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Data from '../../../../data';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    };
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  render() {
    const { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0,
      },
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header
            styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
          />
          <LeftDrawer
            navDrawerOpen={navDrawerOpen}
            menus={Data.menus}
            username="User Admin"
          />

          <div style={styles.container}>
            {this.props.children}
          </div>
          <div> test</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
//        <MuiThemeProvider>
//        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
