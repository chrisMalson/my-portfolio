import { Button, Card, CardActions, CardContent, CardMedia, Icon, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  actions: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonIcon: {
    alignSelf: 'center',
    margin: '0 0.5em 0.5em 0',
    overflow: 'visible'
  },
  buttonInner: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center'
  },
  buttonOuter: {
    marginRight: '0.5em'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  card: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: '40%'
    },
    justifyContent: 'space-between',
    margin: '1em 0',
    padding: '0.5em',
    height: '500px',
    width: '80vw'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0'
  },
  icon: {
    color: theme.palette.common.white,
  },
  image: {
    height: '40vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '45vw'
    }
  },
  list: {
    alignSelf: 'center'
  },
}));

const ProjectCard = ({ name, technologies, imgSrc, siteUrl, repoUrl }) => {
  const { actions, buttonIcon, buttonInner, buttonOuter, buttons, card, content, icon, image, list, siteName } = useStyles();
  const theme = useTheme();
  const cardHovered = true;

  return (
    <Paper
      className={card}
      style={{ backgroundImage: `linear-gradient(${theme.palette.primary.main}bb, ${theme.palette.primary.main}dd), url(${imgSrc})`}}
    >
      <Typography className={siteName} align="center" variant="h4">{name}</Typography>
      <List className={list}>
        {technologies.map(tech => (
          <ListItem key={tech}>
            <ListItemIcon>
              <CheckIcon className={icon} />
            </ListItemIcon>
            <ListItemText primary={tech} />
          </ListItem>
        ))}
      </List>
      <div className={buttons}>
        <Button className={buttonOuter} variant="contained" target="_blank" href={siteUrl}>
          <div className={buttonInner}>
            <Icon className={buttonIcon}>
              <OpenInNewIcon />
            </Icon>
          <Typography>site</Typography>
          </div>
        </Button>
        <Button variant="contained" target="_blank" href={repoUrl}>
        <div className={buttonInner}>
            <Icon className={buttonIcon}>
              <GitHubIcon />
            </Icon>
          <Typography>repo</Typography>
          </div>
        </Button>
      </div>
    </Paper>
  );
};

export default ProjectCard;