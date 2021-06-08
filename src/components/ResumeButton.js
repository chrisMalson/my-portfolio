import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Resume from '../files/ChrisMalson_Resume.pdf'

const useStyles = makeStyles({
  button: {
    padding: '1.5em',
    margin: '2.5em'
  }
});

const ResumeButton = ({ forFooter }) => {
  const { button } = useStyles();

  return (
    <Button style={forFooter && { marginRight: '0' }} target="_blank" href={Resume} className={button} variant="contained" color={forFooter ? 'inherit' : 'secondary'}>
      <Typography variant={forFooter ? 'body1' : 'h6'}>
        {!forFooter && `check out `}
        my résumé
      </Typography>
    </Button>
  );
};

export default ResumeButton;