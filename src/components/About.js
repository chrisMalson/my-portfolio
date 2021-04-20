import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import me_bg from '../images/me_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      #dddb,
      #ddd
    ), url(${me_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-around',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2em'
    }
  },
  description: {
    padding: '0 2.5em',
  }
}));

const About = () => {
  const { background, description, title } = useStyles();
  const theme = useTheme();

  return (
    <div id="about" className={background}>
      <Typography className={title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>who am I?</Typography>
      <Typography className={description} variant="h6">an aspiring developer whose primary goal is to hone his craft and provide value to an increasingly online world.</Typography>
    </div>
  );
};

export default About;