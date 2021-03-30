import { Container, BigMenu, SmallMenu, Title } from './styles';
import { IconButton, Hidden, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react';

export function Header() {
  const [ open, setOpen ] = useState(false);

  function toggleMenu() {
    open ? setOpen(false) : setOpen(true);
  } 

  const useStyles = makeStyles({
    paper: {
      background: '#0F100F',
    }
  });

  const styles = useStyles();

  return(
    <Container>
      <Hidden mdDown>
        <BigMenu>
          <a href="/"><span>!tired</span></a>
          <nav>
            <ul>
              <li><a href="/">order</a></li>
              <li><a href="/">our company</a></li>
              <li><a href="/">our coffee</a></li>
              <li><a href="/">nearby coffee shop</a></li>
            </ul>
          </nav>
          <div>
            <a href="/">login</a>
            <a href="/">sign up</a>
          </div>
        </BigMenu>
      </Hidden>
      <Hidden lgUp>
        <IconButton onClick={() => toggleMenu()}>
          <MenuIcon style={{ fontSize: 40 }}/>
          <SwipeableDrawer
            classes={{ paper: styles.paper}}
            anchor='left'
            open={open}
            onClose={() => toggleMenu()}
            onOpen={() => toggleMenu()}
          >
            <SmallMenu>
              <nav>
                <a href="/"><span>!tired</span></a>
                <ul>
                  <li><a href="/">order</a></li>
                  <li><a href="/">our company</a></li>
                  <li><a href="/">our coffee</a></li>
                  <li><a href="/">nearby coffee shop</a></li>
                  <li><a href="/">login</a></li>
                  <li><a href="/">sign up</a></li>
                </ul>
              </nav>
            </SmallMenu>
          </SwipeableDrawer>
        </IconButton>
        <Title><a href="/"><span>!tired</span></a></Title>
      </Hidden>
    </Container>
  );
}