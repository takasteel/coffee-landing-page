import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Container } from './styles';


export function Footer() {
  return(
    <Container>
      <div>
        <span>about us</span>
        <nav>
          <ul>
            <li><a href="/">our company</a></li>
            <li><a href="/">our coffee</a></li>
            <li><a href="/">privacy policy</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <span>socials</span>
        <nav>
          <ul>
            <li><a href="/"><InstagramIcon />/nottiredcoffee</a></li>
            <li><a href="/"><TwitterIcon />/nottiredcoffee</a></li>
            <li><a href="/"><FacebookIcon />/nottiredcoffee</a></li>
          </ul>
        </nav>
      </div>
      <span>&copy; 2021 !tired. All rights reserved.</span>
    </Container>
  );
}