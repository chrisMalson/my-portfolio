import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      maxWidth: '95%'
    },
    justifyContent: 'space-between',
    margin: '1em 0',
    minWidth: '300px',
    maxWidth: '80%'
  },
  image: {
    height: '30vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '45vw'
    }
  }
}));

const ProjectCard = ({ name, technologies, imgSrc, siteUrl, repoUrl }) => {
  const { actions, buttons, card, image } = useStyles();
  const cardHovered = true;

  return (
    <Card className={card}>
      <CardContent>
        <CardMedia
          className={image}
          component="img"
          alt={name}
          image={imgSrc}
        />
        <Typography align="center" variant="h6">{name}</Typography>
      </CardContent>
      <CardActions className={actions}>
        <Typography variant="body1">
          {cardHovered && <List>
            {technologies.map(tech => (
              <ListItem key={tech}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>}
        </Typography>
        <div className={buttons}>
          <Button fullWidth variant="outlined" target="_blank" href={siteUrl}>site</Button>
          <Button fullWidth variant="outlined" target="_blank" href={repoUrl}>repo</Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;