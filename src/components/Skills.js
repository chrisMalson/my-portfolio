import { Divider, Icon, List, ListItem, ListSubheader, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

import work_bg from '../images/work_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      ${blue[300]}bb,
      ${blue[300]}
    ), url(${work_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '100vh',
  },
  hr: {
    height: '1px',
    [theme.breakpoints.up('sm')]: {
      height: 'auto'
    }
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      minWidth: '100%'
    },
    marginBottom: '1em',
    minWidth: '60%',
    justifyContent: 'space-between',
    padding: '2em'
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
  title: {
    padding: '2em 0'
  },
}));

const Skills = () => {
  const { background, description, hr, info, listContainer, listText, title } = useStyles();
  const theme = useTheme();

  return (
    <div id="skills" className={background}>
      {useMediaQuery(theme.breakpoints.down('xs')) && <div style={{ height: '3em' }}></div>}
      <Typography align="center" className={title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>what do I do?</Typography>
      <div className={info}>
        <Typography className={description} variant="h6">I build simple and snappy front-end web interfaces with experience in:</Typography>
        <Paper className={listContainer}>
          <List>
            <ListSubheader>Languages</ListSubheader>
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
              <Typography className={listText}>GraphQL</Typography>
            </ListItem>
          </List>
          <Divider className={hr} flexItem orientation={useMediaQuery(theme.breakpoints.up('sm')) ? 'vertical' : 'horizontal'} />
          <List>
            <ListSubheader>Frameworks</ListSubheader>
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
          <Divider className={hr} flexItem orientation={useMediaQuery(theme.breakpoints.up('sm')) ? 'vertical' : 'horizontal'} />
          <List>
            <ListSubheader>Tools</ListSubheader>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Git/GitHub</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Firebase</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Redux</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography className={listText}>Heroku/Vercel</Typography>
            </ListItem>
          </List>
        </Paper>
      </div>
    </div>
  );
};

export default Skills;