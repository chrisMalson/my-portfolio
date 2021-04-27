import { Icon, List, ListItem, Typography, useMediaQuery } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

import site_bg from '../images/site_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      ${blue[300]}bb,
      ${blue[300]}
    ), url(${site_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '100vh',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    padding: '0 1.5em 1.5em 1.5em',
    textAlign: 'center'
  },
  listText: {
    paddingLeft: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem'
    }
  },
}));

const Skills = () => {
  const { background, description, listContainer, listText, title } = useStyles();
  const theme = useTheme();

  return (
    <div id="skills" className={background}>
      {useMediaQuery(theme.breakpoints.down('xs')) && <div style={{ height: '3em' }}></div>}
      <Typography className="title" variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>what do I do?</Typography>
      <div>
        <Typography className={description} variant="h6">I build simple and snappy front-end web interfaces with experience in:</Typography>
        <div className={listContainer}>
          <List>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>HTML</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>CSS</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>JavaScript</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>ES6</Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>React</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Material-UI</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Next.js</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Gatsby</Typography>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Skills;