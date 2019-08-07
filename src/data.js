import React from 'react';
import Home from 'material-ui/svg-icons/action/home';
import Business from 'material-ui/svg-icons/communication/business';
import Folder from 'material-ui/svg-icons/file/folder';

const data = {
  menus: [
    { text: 'Home', icon: <Home />, link: '/dashboard' },
    { text: 'My Properties', icon: <Business />, link: '/form' },
    {
      text: 'Prospect Evaluation',
      icon: <Folder />,
      link: '/form',
      submenu: [
        { text: 'One', icon: <Home />, link: '/dashboard' },
        { text: 'Two', icon: <Home />, link: '/dashboard' },
        { text: 'Three', icon: <Home />, link: '/dashboard' },
      ],
    },
  ],

};

export default data;
