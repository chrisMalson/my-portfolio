import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-around'
  }
}));

const Hero = () => {
  const { background } = useStyles();
  const theme = useTheme();

  return (
    <div className={background}>
      <div />
      <Typography variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>Chris Malson</Typography>
      <ContactButton />
      <NavBar />
    </div>
  );
};

export default Hero;