import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  teal500, teal800, teal700,
  teal900, orange200, orange400,
  orange500, white, grey100, grey400, grey600, grey900, blue600, blueGrey300,
} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({

  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: teal700,
    primary2Color: teal500,
    primary3Color: teal900,
    accent1Color: orange500,
    accent2Color: orange400,
    accent3Color: orange200,
    textColor: grey900,
    secondaryTextColor: grey600,
    alternateTextColor: white,
    canvasColor: grey100, // background of containers
    borderColor: grey600,
    disabledColor: grey400,
    pickerHeaderColor: teal900,
    clockCircleColor: teal900,
  },
  appBar: {
    height: 57,
    color: teal500,
  },
  drawer: {
    width: 230,
    color: grey900,
  },
  raisedButton: {
    primaryColor: blue600,
  },
  textField: {
    color: white,
    backgroundColor: blueGrey300,
  },
  subheader: {
    fontSize: 24,
    backgroundColor: orange500,
    color: teal800,
  },
});


export default themeDefault;
