import { Icon, List, ListItem, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';

import site_bg from '../images/site_bg.png';

const useStyles = makeStyles({
  background: {
    alignItems: 'center',
    backgroundImage: `linear-gradient(
      ${blue[300]}bb,
      ${blue[300]}
    ), url(${site_bg})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100vh',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const Skills = () => {
  const { background, listContainer } = useStyles();

  return (
    <div id="skills" className={background}>
      <Typography variant="h1">what do I do?</Typography>
      <div>
        <Typography variant="h6">I build simple and snappy front-end web interfaces with experience in:</Typography>
        <div className={listContainer}>
          <List>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">HTML</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">CSS</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">JavaScript</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">ES6</Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">React</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">Material-UI</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">Next.js</Typography>
            </ListItem>
            <ListItem>
              <Icon>
                <CodeIcon />
              </Icon>
              <Typography variant="h6">Gatsby</Typography>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Skills;