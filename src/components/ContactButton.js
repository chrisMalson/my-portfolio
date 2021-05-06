import { graphql, useStaticQuery } from 'gatsby';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import ReactContactForm from 'react-mail-form';
import { SocialIcon } from 'react-social-icons';
import { LinearScale } from '@material-ui/icons';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    margin: '0 1.5em',
    transition: 'transform .1s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(2)'
    }
  },
  text: {
    padding: '1.5em'
  }
});

const ContactButton = ({ mini, forFooter }) => {
  const { form, icon, text } = useStyles();
  const [open, setOpen] = useState(false);

  const {
    site: {
      siteMetadata: {
        email, linkedin, github
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          linkedin
          github
        }
      }
    }
  `);

  return (
    <>
      {mini ? (
        <SocialIcon className={icon} network="email" onClick={() => setOpen(true)} />
      ) : (
        <Button onClick={() => setOpen(true)} className={text} variant="contained" color="secondary">
          <Typography variant={forFooter ? "h6" : "h4"}>
            let's chat
          </Typography>
        </Button>
      )}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='md'
      >
        <DialogTitle>
          <Typography>I'd enjoy to hear from you!</Typography>
        </DialogTitle>
        <DialogContent>
          <ReactContactForm className={form} to="chris@malson.dev" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactButton;