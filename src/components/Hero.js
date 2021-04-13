import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactButton from './ContactButton';
import NavBar from './NavBar';
import Header from './Header';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-around'
  }
}));

const Hero = () => {
  const { background } = useStyles();

  return (
    <div className={background}>
      <div />
      <Typography variant="h1">Chris Malson</Typography>
      <ContactButton />
      <NavBar />
    </div>
  );
};

export default Hero;