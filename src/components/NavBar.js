import { Link as GLink } from "gatsby";
import { Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%'
  },
  text: {
    color: theme.palette.common.white
  }
}));

const NavBar = () => {
  const { nav, text } = useStyles();
  
  return (
    <div className={nav}>
      <Button href="#about" variant="text">
        <Typography className={text} variant="h5">who am I?</Typography>
      </Button>
      <Divider orientation="vertical" />
      <Button href="#skills" variant="text">
        <Typography className={text} variant="h5">what do I do?</Typography>
      </Button>
      <Divider orientation="vertical" />
      <Button href="#works" variant="text">
        <Typography className={text} variant="h5">what have I done?</Typography>
      </Button>
    </div>
  );
};

export default NavBar;