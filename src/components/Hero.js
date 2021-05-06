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
  },
  textContainer: {
    textAlign: 'center'
  }
}));

const Hero = ({ headerVisible }) => {
  const { background, textContainer } = useStyles();
  const theme = useTheme();

  return (
    <div id="hero" className={background}>
      <div />
      <div className={textContainer}>
        <Typography variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>Chris Malson</Typography>
        <Typography variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h3' : 'h5'}>a developer</Typography>
      </div>
      <ContactButton />
      {!headerVisible ? <NavBar /> : <div></div>}
    </div>
  );
};

export default Hero;