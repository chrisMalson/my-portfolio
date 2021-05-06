import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';

import ContactButton from './ContactButton';
import ResumeButton from './ResumeButton';

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.primary.main,
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `1.45rem 1.0875rem`,
    [theme.breakpoints.down('xs')]: {
      padding: '0.75rem'
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  icon: {
    margin: '0 0.75em'
  }
}));

const Footer = () => {
  const { footer, inner, icon } = useStyles();
  const theme = useTheme();

  const {
    site: {
      siteMetadata: {
        linkedin, github
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedin
          github
        }
      }
    }
  `);

  return (
    <footer className={footer}>
      <div className={inner}>
        <div>
          <SocialIcon bgColor={theme.palette.grey[300]} className={icon} url={linkedin} />
          <SocialIcon bgColor={theme.palette.grey[300]} className={icon} url={github} />
        </div>
        <div>
          <ContactButton forFooter />
          <ResumeButton forFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
