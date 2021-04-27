import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ContactButton from './ContactButton';
import contact_bg from '../images/contact_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      ${theme.palette.primary.main}bb,
      ${theme.palette.primary.main}
    ), url(${contact_bg})`,
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '100vh',
  },
  text: {
    textAlign: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

const Contact = () => {
  const { background, text, buttonContainer } = useStyles();
  const theme = useTheme();

  return (
    <div className={background}>
      <Typography className={text} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>that's pretty much it</Typography>
      <div className={buttonContainer}>
        <Typography gutterBottom className={text} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h6' : 'body1'}>if you want some site work done, then</Typography>
        <ContactButton />
      </div>
    </div>
  );
};

export default Contact;