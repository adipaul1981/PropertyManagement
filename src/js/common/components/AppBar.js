import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import { browserHistory } from 'react-router'
import LeftDrawer from './LeftDrawer/LeftDrawer'
import AddPropertyDialog from './dialogs/AddPropertyDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      navDrawerOpen: false,
      addPropertyDialog: false,
    };
  }


  handleSubmit = (json) => {
    this.setState({ addPropertyDialog: false });

    fetch('/NewProspectProperty', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })
      .then((response) => {
        if (response.status === 201) {
          response.json()
            .then((data) => {
              browserHistory.push({ pathname: `/Property/${data.MLSNumber}`, state: { mlsnumber: data.MLSNumber } });
            });
        } else throw new Error('Something went wrong on api server!');
      })
  }

  handleOpen() {
    this.setState({ addPropertyDialog: true });
  }

  handleClose() {
    this.setState({ addPropertyDialog: false });
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  render() {
    const classes = this.props;

    const { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.handleChangeRequestNavDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
          handleOpen={this.handleOpen}
        />
        {/*<AddPropertyDialog*/}
        {/*  addPropertyDialog={this.state.addPropertyDialog}*/}
        {/*  handleClose={this.handleClose}*/}
        {/*  handleSubmit={this.handleSubmit}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default withStyles(useStyles)(ButtonAppBar);
