import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    alignItems: 'center',
    backgroundColor: 'gold',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
  }
});

const Works = () => {
  const { background } = useStyles();

  return (
    <div id="works" className={background}>
      <Typography variant="h1">what have I done?</Typography>
      <Typography variant="h6">this is the place where I will mention the sites I've built thus far</Typography>
    </div>
  );
};

export default Works;