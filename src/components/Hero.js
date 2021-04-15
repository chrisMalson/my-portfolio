import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactButton from './ContactButton';
import hero_bg from '../images/hero_bg.png';
import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
        ${theme.palette.primary.main}bb,
        ${theme.palette.primary.main}
      ), url(${hero_bg})`,
    backgroundSize: 'cover',
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