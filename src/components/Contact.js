import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactButton from './ContactButton';
import contact_bg from '../images/contact_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      ${theme.palette.primary.main}bb,
      ${theme.palette.primary.main}
    ), url(${contact_bg})`,
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
  }
}));

const Contact = () => {
  const { background } = useStyles();

  return (
    <div className={background}>
      <Typography variant="h1">that's pretty much it</Typography>
      <div>
        <Typography variant="h6">so if you wanna chat, here's how:</Typography>
        <ContactButton />
      </div>
    </div>
  );
};

export default Contact;