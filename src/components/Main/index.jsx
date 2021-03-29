import { Container, Section1, Section2, Section3, Section4 } from './styles'
import { Hidden } from '@material-ui/core';

export function Main() {
  return(
    <Container>
      <Section1>
        <article>
          <div>
            <h1>!tired</h1>
            <p>the perfect coffee for developers;</p>
            <button type="button">
              order now
            </button>
            <p>first bag with 20% discount!</p>
          </div>
        </article>
      </Section1>
      <Section2>
        <article>
          <div>
            <p>the best arabica coffee, from the best producers;</p>
            <p>direct from Kenya;</p>
            <span><a href="#">Learn more</a></span>
          </div>
        </article>
        <Hidden mdDown>
          <div>
            <img src="assets/kenya.png" alt="Africa map pointing to Kenya"/>
          </div>
        </Hidden>
      </Section2>
      <Section3>
        <article>
        </article>
      </Section3>
      <Section4>
        <article>
          <div>
            <Hidden mdDown>
              <p className="section4-hidden">you can make you own coffee at home;</p>
            </Hidden>
            <p>or you can grab your cup at your local coffee shop;</p>
            <span><a href="#">check the nearby coffee shop</a></span>
          </div>
        </article>
      </Section4>
    </Container>
  );
}