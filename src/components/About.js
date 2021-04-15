import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors'

import me_bg from '../images/me_bg.png';

const useStyles = makeStyles({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      #dddb,
      #ddd
    ), url(${me_bg})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-around',
  }
});

const About = () => {
  const { background } = useStyles();

  return (
    <div id="about" className={background}>
      <Typography variant="h1">who am I?</Typography>
      <Typography variant="h6">an aspiring developer whose primary goal is to hone his craft and provide value to an increasingly online world.</Typography>
    </div>
  );
};

export default About;