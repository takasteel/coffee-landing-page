import { Container, Section1, Section2, Section3, Section4 } from './styles'

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
    </Container>
  );
}