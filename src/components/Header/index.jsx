import { Container, BigMenu, SmallMenu } from './styles';
import { IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
export function Header() {
  return(
    <Container>
      <Hidden mdDown>
        <BigMenu>
          <a href="#"><span>!tired</span></a>
          <nav>
            <ul>
              <li><a href="#">order</a></li>
              <li><a href="#">our company</a></li>
              <li><a href="#">our coffee</a></li>
              <li><a href="#">nearby coffee shop</a></li>
            </ul>
          </nav>
          <div>
            <a href="#">login</a>
            <a href="#">sing up</a>
          </div>
        </BigMenu>
      </Hidden>
      <Hidden lgUp>
        <IconButton>
          <MenuIcon style={{ fontSize: 40 }}/>
        </IconButton>
        <SmallMenu>
        </SmallMenu>
      </Hidden>
    </Container>
  );
}