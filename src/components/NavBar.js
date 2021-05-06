import { Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    '&:hover': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`
    },
    '&:focus': {
      borderBottom: `0px solid ${theme.palette.secondary.main}`,
      // transition: 'border-bottom 2s',
    },
    '&:active': {
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
      // transition: 'border-bottom 1s',
    }
  },
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
  const { button, nav, text } = useStyles();

  const handleNav = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  
  return (
    <div className={nav}>
      <Button
        className={button}
        disableElevation
        disableFocusRipple
        disableRipple
        onClick={() => handleNav('about')}
        variant="text"
      >
        <Typography className={text}>who am I?</Typography>
      </Button>
      <Divider orientation="vertical" />
      <Button
        className={button}
        disableElevation
        disableFocusRipple
        disableRipple
        onClick={() => handleNav('skills')}
        variant="text"
      >
        <Typography className={text}>what do I do?</Typography>
      </Button>
      <Divider orientation="vertical" />
      <Button
        className={button}
        disableElevation
        disableFocusRipple
        disableRipple
        onClick={() => handleNav('works')}
        variant="text"
      >
        <Typography className={text}>what have I done?</Typography>
      </Button>
    </div>
  );
};

export default NavBar;