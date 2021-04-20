import { makeStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.main,
    left: '0',
    position: 'sticky',
    top: '0'
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    padding: `1.45rem 1.0875rem`,
    [theme.breakpoints.down('xs')]: {
      padding: '0.75rem'
    }
  },
  text: {
    color: `white`,
    textDecoration: `none`,
  },
  textContainer: {
    margin: 0
  }
}));

const Header = () => {
  const { header, inner } = useStyles();

  return (
    <header className={header}>
      <div className={inner}>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
