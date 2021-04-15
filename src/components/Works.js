import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import card_agoc from '../images/card_agoc.png';
import card_oatd from '../images/card_oatd.png';
import git_bg from '../images/git_bg.png';

const useStyles = makeStyles({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      #dddb,
      #ddd
    ), url(${git_bg})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
  },
  card: {
    maxWidth: '30%'
  },
  cardList: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%'
  }
});

const Works = () => {
  const { background, card, cardList } = useStyles();

  return (
    <div id="works" className={background}>
      <Typography variant="h1">what have I done?</Typography>
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