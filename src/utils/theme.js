import { createMuiTheme } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 700
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: [
      'Rubik'
    ],
  },
  palette: {
    primary: {
      main: blue[900]
    },
    secondary: {
      main: orange[500]
    }
  }
});

export default theme;