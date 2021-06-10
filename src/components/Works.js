import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import github_bg from '../images/github_bg.png';
import card_agoc from '../images/card_agoc.png';
import card_oatd from '../images/card_oatd.png';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      #dddb,
      #ddd
    ), url(${github_bg})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '100vh',
    paddingBottom: '2em'
  },
  cardList: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    },
    justifyContent: 'space-around',
    padding: '4em',
    width: '90%'
  },
  title: {
    textAlign: 'center',
    padding: '2em 0'
  }
}));

const Works = () => {
  const { background, cardList, title } = useStyles();
  const theme = useTheme();

  return (
    <div id="works" className={background}>
      {useMediaQuery(theme.breakpoints.down('xs')) && <div style={{ height: '3em' }}></div>}
      <Typography className={title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>where have I been?</Typography>
      <Typography variant="h6" style={{ textAlign: 'center', padding: '0 0.5em' }} gutterBottom>here are some examples of my work:</Typography>
      <div className={cardList}>
        <ProjectCard
          name="A Game of Chance"
          technologies={['React', 'Next.js', 'Material-UI', 'Firebase']}
          imgSrc={card_agoc}
          siteUrl="https://agoc.malson.dev/"
          repoUrl="https://github.com/chrisMalson/a-game-of-chance"
        />
        <ProjectCard
          name="Oasis at the Dawn"
          technologies={['React', 'Material-UI']}
          imgSrc={card_oatd}
          siteUrl="https://oasisatthedawn.com"
          repoUrl="https://github.com/chrisMalson/oasis-at-the-dawn"
          reversed
        />
      </div>
    </div>
  );
};

export default Works;