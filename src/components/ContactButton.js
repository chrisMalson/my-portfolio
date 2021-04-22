import { graphql, useStaticQuery } from 'gatsby';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
  text: {
    padding: '1.5em'
  }
});

const ContactButton = () => {
  const { text } = useStyles();
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
      <Button onClick={() => setOpen(true)} className={text} variant="contained" color="secondary">
        <Typography variant="h3">
          let's talk
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth='md'
      >
        <DialogTitle>
          <Typography>I'm always willing to chat!</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>
            you can email me at{' '}
            <Link href={`mailto:${email}`}>{email}</Link>{' '}
            or network with me at the following:
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button href={linkedin}>
            LinkedIn
          </Button>
          <Button href={github}>
            GitHub
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactButton;