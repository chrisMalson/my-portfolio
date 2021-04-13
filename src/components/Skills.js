import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    alignItems: 'center',
    backgroundColor: 'mediumspringgreen',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
  }
});

const Skills = () => {
  const { background } = useStyles();

  return (
    <div id="skills" className={background}>
      <Typography variant="h1">what do I do?</Typography>
      <Typography variant="h6">I build simple and snappy front-end web interfaces with experience in html, css, javascript, react and various other technologies</Typography>
    </div>
  );
};

export default Skills;