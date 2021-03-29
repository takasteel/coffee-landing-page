import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`

export const Section1 = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-position: 40% center;
  background-image: url("assets/bg1.jpg");
  
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 1080px;
      max-height: 575px;

      h1 {
        font-size: 12.5rem;
        margin-bottom: 2rem;
      }

      p:first-of-type {
        font-size: 2.5rem;
        margin-bottom: 5rem;
      }

      button {
        background: #dbb79a;
        color: var(--bg);
        font-size: 2rem;
        font-weight: 700;
        border: 0;
        width: 280px;
        height: 68px;
        border-radius: 1.5rem;
        margin-bottom: 2rem;

        transition: filter 0.3s;
      }

      button:hover, button:focus {
        filter: brightness(0.8);
        
      }

      p:last-of-type {
        font-size: 1.125rem;
      }
    }
  }
`

export const Section2 = styled.section`

`
export const Section3 = styled.section`

`
export const Section4 = styled.section`

`