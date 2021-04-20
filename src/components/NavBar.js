import { Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '75%'
    },
    [theme.breakpoints.up('md')]: {
      width: '60%'
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem'
    },
    color: theme.palette.common.white,
    textAlign: 'center'
  }
}));

const NavBar = () => {
  const { nav, text } = useStyles();
  
  return (
    <div className={nav}>
      <Button href="#about" variant="text">
        <Typography className={text}>who am I?</Typography>
      </Button>
      <Divider orientation="vertical" />
      <Button href="#skills" variant="text">
        <Typography className={text}>what do I do?</Typography>
      </Button>
      <Divider orientation="vertical" />
      <Button href="#works" variant="text">
        <Typography className={text}>what have I done?</Typography>
      </Button>
    </div>
  );
};

export default NavBar;