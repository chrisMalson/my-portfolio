import { Divider, Icon, List, ListItem, ListItemIcon, ListSubheader, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { blue, blueGrey } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

import work_bg from '../images/work_bg.png';

const useStyles = makeStyles(theme => ({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      ${blue[200]}bb,
      ${blue[200]}
    ), url(${work_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: '100vh',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '4em'
  },
  listContainerWrapper: {
    // backgroundColor: blue[200],
    // width: '100%'
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
    // padding: '2em 2em 4em 2em'
  },
  description: {
    padding: '0 1.5em 1.5em 1.5em',
    textAlign: 'center'
  },
  title: {
    padding: '2em 0'
  },
  paper: {
    margin: '0.25em',
    width: '224px'
  }
}));

const Skills = () => {
  const { background, description, info, listContainerWrapper, listContainer, paper, title } = useStyles();
  const theme = useTheme();

  const SkillsList = ({ category, skillset }) => {
    return (
      <Paper className={paper}>
        <List>
          <ListSubheader>{category}</ListSubheader>
          <ListItem>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
            <Typography>{skillset[0]}</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
            <Typography>{skillset[1]}</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
            <Typography>{skillset[2]}</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
            <Typography>{skillset[3]}</Typography>
          </ListItem>
        </List>
      </Paper>
    );
  };

  return (
    <div id="skills" className={background}>
      {useMediaQuery(theme.breakpoints.down('xs')) && <div style={{ height: '3em' }}></div>}
      <Typography align="center" className={title} variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'h1' : 'h3'}>what do I do?</Typography>
      <div className={info}>
        <Typography className={description} variant="h6" gutterBottom>I build simple and snappy front-end web interfaces with experience in:</Typography>
        <div className={listContainerWrapper}>
          <div className={listContainer}>
            <SkillsList
              category="Languages"
              skillset={[
                "JavaScript/ES6",
                "HTML5",
                "CSS3",
                "GraphQL"
              ]}
            />
            <SkillsList
              category="Frameworks"
              skillset={[
                "React",
                "Material-UI",
                "Next.js",
                "Gatsby"
              ]}
            />
            <SkillsList
              category="Tools"
              skillset={[
                "Git/GitHub",
                "Firebase",
                "Redux",
                "Heroku/Vercel"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;