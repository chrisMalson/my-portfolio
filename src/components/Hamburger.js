import { useState } from 'react';
import { Drawer, Icon, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.common.white,
    position: 'absolute',
    right: '0.75em',
    top: '0.75em'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    height: '30vh',
    padding: '0.5em'
  }
}));

const Hamburger = ({ children }) => {
  const { icon, paper } = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Icon className={icon} onClick={() => setOpen(true)}>
        <MenuIcon />
      </Icon>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Paper className={paper}>
          <Icon className={icon} onClick={() => setOpen(false)}>
            <CloseIcon />
          </Icon>
          {children}
        </Paper>
      </Drawer>
    </>
  );
};

export default Hamburger;