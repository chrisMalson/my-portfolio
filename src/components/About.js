import { graphql, useStaticQuery } from 'gatsby';
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';

import ContactButton from './ContactButton';
import ResumeButton from './ResumeButton';
import me_bg from '../images/me_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      #dddb,
      #ddd
    ), url(${me_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-around',
  },
  icon: {
    margin: '0 1.5em',
    transition: 'transform .1s',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  },
  iconContainer: {
    paddingBottom: '4em'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      padding: '3em 0 2em 0'
    }
  },
  description: {
    padding: '0 2.5em',
  }
}));

const About = () => {
  const { background, description, icon, iconContainer, info, title } = useStyles();
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
    <div id="about" className={background}>
      <Typography className={title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>
        who am I?
      </Typography>
      <div className={info}>
        <Typography className={description} variant="body1">
          <span style={{ paddingLeft: '3rem' }}>an aspiring developer whose primary goals are to:</span>
          <ul>
            <li>explore my innate curiosity of programming and development</li>
            <li>challenge myself and hone my craft</li>
            <li>provide value to an increasingly online world</li>
          </ul>
        </Typography>
        <ResumeButton />
        <div className={iconContainer}>
          <SocialIcon className={icon} bgColor={theme.palette.primary.main} url={linkedin} />
          <SocialIcon className={icon} url={github} />
          <ContactButton mini />
        </div>
      </div>
    </div>
  );
};

export default About;