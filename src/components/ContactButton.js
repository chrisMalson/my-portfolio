import { graphql, useStaticQuery } from 'gatsby';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

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
      transform: 'scale(1.5)'
    }
  },
  text: {
    padding: '1.5em'
  },
  input: {
    marginBottom: '0.75em'
  }
});

const ContactButton = ({ mini, forFooter }) => {
  const { form, icon, text, input } = useStyles();
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState(`Hey Chris! Let's chat about...`)

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
          <Typography variant={forFooter ? "body1" : "h4"}>
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
          <Typography>I look forward to hearing from you!</Typography>
        </DialogTitle>
        <DialogContent style={{ padding: '0 24px' }}>
          <form className={form}>
            <TextField
              className={input}
              variant="outlined"
              size="small"
              placeholder="Your name/email"
              required
              onChange={({ target: { value }}) => setSubject(value)}
            />
            <TextField
              className={input}
              variant="outlined"
              multiline
              rows={5}
              rowsMax={5}
              defaultValue={message}
              placeholder="What would you like to chat about?"
              required
              onChange={({ target: { value }}) => setMessage(value)}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              href={`mailto:${email}?subject=${subject}&body=${message.replace(/\n/g, '%0D%0A')}`}
              target="_blank"
            >
              submit message
            </Button>
          </form>
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