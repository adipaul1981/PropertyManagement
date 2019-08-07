import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import Home from 'material-ui/svg-icons/action/home';
import Business from 'material-ui/svg-icons/communication/business';
import Folder from 'material-ui/svg-icons/file/folder';
import { cyanA200, yellowA200 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';
/* import DialogAddProperty from '../dialogs/DialogAddProperty'; */

export default class ListDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addDialog: false,
    };
  }

    handleOpen = () => {
      this.setState({ addDialog: true });
    };

    handleClose = () => {
      this.setState({ addDialog: false });
    };

     handleSubmit = (json) => {
       this.setState({ addDialog: false });

       fetch('/NewProspectProperty', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(json),
       })
         .then((response) => {
           if (response.status == 201) {
             response.json()
               .then((data) => {
                 browserHistory.push({ pathname: `/Property/${data.MLSNumber}`, state: { mlsnumber: data.MLSNumber } });
               });
           } else throw new Error('Something went wrong on api server!');
         })
     };

  toggleModal = () => {
    this.setState({
      addDialog: !this.state.addDialog,
    });
  }


  render() {
    return (
      <div>
        <List>
          <ListItem style={this.props.style} primaryText="Home" leftIcon={<Home />} />
          <ListItem style={this.props.style} primaryText="My Properties" leftIcon={<Business />} />
          <ListItem
            style={this.props.style}
            primaryText="Prospect Evaluation"
            leftIcon={<Folder />}
            initiallyOpen={false}
            primaryTogglesNestedList
            nestedItems={[
              <ListItem
                key={1}
                style={this.props.style}
                onTouchTap={this.handleOpen}
                primaryText="Add"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                style={this.props.style}
                primaryText="Remove"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={3}
                style={this.props.style}
                primaryText="View List"
                leftIcon={<ContentInbox color={yellowA200} hoverColor={cyanA200} />}
              />,
              <ListItem
                key={4}
                style={this.props.style}
                primaryText="View Report"
                leftIcon={<ContentInbox />}
              />,
            ]}
          />
        </List>
        /*
        <DialogAddProperty open={this.state.addDialog} handleClose={this.handleClose} handleSubmit={this.handleSubmit} />
*/
      </div>

    );
  }
}
