import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    padding: '1.5em'
  }
});

const ContactButton = () => {
  const { text } = useStyles();

  return (
    <Button className={text} variant="contained" color="secondary">
      <Typography variant="h3">
        let's talk
      </Typography>
    </Button>
  );
};

export default ContactButton;