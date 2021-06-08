import { Button, Divider, Link, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    borderBottom: `3px solid transparent`,
    cursor: 'pointer',
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      transition: 'border-color 0.5s'
    },
    '& .touched': {
      borderColor: 'transparent',
      transition: 'border-color 0.5s'
    }
  },
  drawerNav: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
    padding: '2em'
  },
  nav: {
    alignItems: 'center',
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

const NavBar = ({ inDrawer }) => {
  const { button, drawerNav, nav, text } = useStyles();
  const theme = useTheme();

  const handleNav = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  
  return (
    <div className={inDrawer ? drawerNav : nav}>
      <Link
        className={button}
        onClick={() => handleNav('about')}
        onTouchStart={(e) => e.target.parentElement.style.borderColor = theme.palette.secondary.main}
        onTouchEnd={(e) => setTimeout(() => e.target.parentElement.style.borderColor = "transparent", 500)}
      >
        <Typography className={text}>who am I?</Typography>
      </Link>
      <Divider orientation={inDrawer ? "horizontal" : "vertical"} />
      <Link
        className={button}
        onClick={() => handleNav('skills')}
        onTouchStart={(e) => e.target.parentElement.style.borderColor = theme.palette.secondary.main}
        onTouchEnd={(e) => setTimeout(() => e.target.parentElement.style.borderColor = "transparent", 500)}
      >
        <Typography className={text}>what do I do?</Typography>
      </Link>
      <Divider orientation={inDrawer ? "horizontal" : 'vertical'} />
      <Link
        className={button}
        onClick={() => handleNav('works')}
        onTouchStart={(e) => e.target.parentElement.style.borderColor = theme.palette.secondary.main}
        onTouchEnd={(e) => setTimeout(() => e.target.parentElement.style.borderColor = "transparent", 500)}
      >
        <Typography className={text}>where have I been?</Typography>
      </Link>
    </div>
  );
};

export default NavBar;