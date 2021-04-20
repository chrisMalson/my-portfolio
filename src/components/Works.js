import { Card, CardContent, CardMedia, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import card_agoc from '../images/card_agoc.png';
import card_oatd from '../images/card_oatd.png';
import git_bg from '../images/git_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      #dddb,
      #ddd
    ), url(${git_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '100vh',
  },
  card: {
    margin: '1em 0',
    maxWidth: '300px'
  },
  cardList: {
    display: 'flex',
    '@media (max-width: 700px)': {
      flexDirection: 'column',
      alignItems: 'center'
    },
    justifyContent: 'space-around',
    width: '90%'
  },
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2em'
    }
  },
}));

const Works = () => {
  const { background, card, cardList, title } = useStyles();
  const theme = useTheme();

  return (
    <div id="works" className={background}>
      {useMediaQuery(theme.breakpoints.down('xs')) && <div style={{ height: '3em' }}></div>}
      <Typography className={title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>what have I done?</Typography>
      <div className={cardList}>
        <Card className={card}>
          <CardContent>
            <Typography variant="h6">A Game of Chance</Typography>
            <CardMedia
              component="img"
              alt="A Game of Chance"
              height="200"
              image={card_agoc}
            />
            <Typography variant="body1">A backlog management and random game selection app. Made in React, using Material-UI and Next.js</Typography>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent>
            <Typography variant="h6">Oasis at the Dawn</Typography>
            <CardMedia
              component="img"
              alt="Oasis at the Dawn"
              height="200"
              image={card_oatd}
            />
            <Typography variant="body1">A landing page designed for a condo rental in Galveston, TX. Made in React, styled with Material-UI</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Works;