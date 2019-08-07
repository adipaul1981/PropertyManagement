import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse'
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { browserHistory } from 'react-router';
import AddPropertyDialog from '../dialogs/AddPropertyDialog'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SwipeableTemporaryDrawer(props) {
  const { navDrawerOpen, handleChangeRequestNavDrawer, handleOpen } = props;

  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
    openProperties: false,
    openProspects: false,
    addDialog: false,
  });

  const toggleDrawer = (toggle) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, open: toggle });
  };

  function handleClick() {
    setState({ ...state, openProspects: !state.openProspects });
  }

  function handleClickAway() {
    console.log('AWAY')
    setState({ ...state, open: false });
  }

  const sideList = () => (
    <ClickAwayListener onClickAway={handleClickAway}>
      <List>
        <ListItem button key="My Properties">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My Properties" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="My Prospects" />
          {state.openProspects ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <div
          className={classes.list}
          role="presentation"
          onClick={handleChangeRequestNavDrawer}
          onKeyDown={toggleDrawer(false)}
        >
          <Collapse in={state.openProspects} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} key={1} onClick={handleOpen}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Add Property" />
              </ListItem>
            </List>

          </Collapse>
        </div>

      </List>
    </ClickAwayListener>
  );

  return (
    <div>
      <SwipeableDrawer
        open={navDrawerOpen}
        onClose={toggleDrawer('open', false)}
        onOpen={toggleDrawer('open', true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}
