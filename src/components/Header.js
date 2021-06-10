import { Link, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Hamburger from './Hamburger';

import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.main,
    left: '0',
    position: 'sticky',
    top: '0',
    zIndex: '999',
  }, 
  inner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: `1.45rem 1.0875rem`,
    [theme.breakpoints.down('xs')]: {
      padding: '0.75rem'
    },
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      width: '90%'
    },
    '@media (min-width: 960px)': {
      width: '80%'
    },
    '@media (min-width: 1280px)': {
      width: '60%'
    }
  },
  text: {
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
      transition: 'color 0.5s'
    },
    color: `${theme.palette.common.white}`,
    fontFamily: 'Rock Salt',
  },
}));

const Header = () => {
  const { header, inner, navContainer, text } = useStyles();
  const theme = useTheme();

  return (
    <header className={header}>
      <div className={inner}>      
        <Typography gutterBottom className={text} variant="h5">
          <Link
            underline="none"
            onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
            color="inherit"
          >          
            CM
          </Link>
        </Typography>
        {useMediaQuery(theme.breakpoints.up('sm')) ?
          (
            <div className={navContainer}>
              <NavBar />
            </div>
          ) : (
            <Hamburger>
              <NavBar inDrawer />
            </Hamburger>
          )
        }
      </div>
    </header>
  );
};

export default Header;
