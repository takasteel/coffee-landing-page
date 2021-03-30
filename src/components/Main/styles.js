import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
`

export const Section1 = styled.section`
  display: flex;
  justify-content: center;
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
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 5rem;
      }

      button {
        background: var(--highlight);
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

  @media(max-width: 1080px) {
    article {
      div {
        max-width: 760px;
        max-height: 100%;

        h1 {
          font-size: 9.5rem;
        }

        p:first-of-type {
          font-size: 2rem;
          margin-bottom: 4rem;
        }

        button {
          font-size: 1.75rem;
          width: 250px;
          height: 58px;
          margin-bottom: 1.5rem;
        }

        p:last-of-type {
          font-size: 1rem;
        }
      }
    }
  }
  @media(max-width: 760px) {
    article {
      div {
        max-height: 575px;

        h1 {
          font-size: 7rem;
        }

        p:first-of-type {
          font-size: 1.5rem;
          margin-bottom: 3rem;
        }

        button {
          font-size: 1.25rem;
          width: 220px;
          height: 40px;
          margin-bottom: 1.5rem;
        }

        p:last-of-type {
          font-size: 1rem;
        }
      }
    }
  }
  @media(max-width: 480px) {
    article {
      div {
        max-height: 575px;
        max-width: 320px;
        h1 {
          font-size: 5rem;
        }

        p:first-of-type {
          font-size: 1.25rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        button {
          font-size: 1.25rem;
          width: 220px;
          height: 40px;
          margin-bottom: 2rem;
        }

        p:last-of-type {
          font-size: 1rem;
        }
      }
    }
  }
`

export const Section2 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "main-content main-content kenya";
  background-size: cover;
  background-position: center center;
  background-image: url("assets/bg2.jpg");
  
  article {
    grid-area: main-content;
    display: flex;
    align-items: center;
    height: 92vh;

    div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      max-height: 560px;
      max-width: 70%;

      margin-left: 10rem;

      p {
        font-size: 3.5rem;
        font-weight: 500;
      }

      span > a {
        font-size: 2rem;
        text-decoration-line: underline;
      }
    }
  }

  &>div {
    grid-area: kenya;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10rem;
  }

  @media(max-width: 1440px) {

    article {
      div {
        max-width: 70%;
        margin-left: 10rem;

        p {
          font-size: 2.5rem;
        }

        span > a {
          font-size: 1.5rem;
        }
      }
      &>div {
        margin-right: 0rem;
      }
    }
  }

  @media(max-width: 1080px) {
    article {
      div {
        margin-left: 8rem;
      }
    }
  }
  @media(max-width: 760px) {
    display: block;
    article {
      div {
        max-width: 60%;
        margin-left: 5rem;
        p {
          font-size: 2rem;
        }
        span > a {
          font-size: 1.25rem;
        }
      }
    }
  }
  @media(max-width: 480px) {
    article {
      div {
        margin-left: 5rem;
        p {
          font-size: 1.5rem;
        }
        span > a {
          font-size: 1.25rem;
        }
      }
    }
  }
`
export const Section3 = styled.section`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-image: url("assets/bag.jpg");

  article {
    display: flex;
    height: 1116px;
  }
  @media(max-width: 1280px) {
    background-position: center 20%;
    article {
      height: 960px;
    }
    div {
      display: flex;  
      max-width: 540px;
      p {
        margin-top: 3rem;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 500;
      } 
    }
  }
  @media(max-width: 760px) {
    article {
      height: 960px;
    }
    div {
      display: flex;  
      max-width: 400px;
      p {
        margin-top: 3rem;
        text-align: center;
        font-size: 2rem;
      } 
    }
  }
  @media(max-width: 480px) {
    article {
      height: 760px;
    }
    div {
      display: flex;  
      max-width: 320px;
      p {
        margin-top: 3rem;
        text-align: center;
        font-size: 1.5rem;
      } 
    }
  }
` 
export const Section4 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  ". main-content";
  justify-content: center;
  background-size: cover;
  background-position: 15% center;
  background-image: url("assets/cup.jpg");

  article {
    grid-area: main-content;
    height: 92vh;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 3rem;
      max-width: 70%;
      height: 100%;
      margin-right: 10rem;

      p {
        font-size: 3.5rem;
        font-weight: 500;
        text-align: right;
      }
      
      span {
        text-align: right;

        a {
          font-size: 2rem;
          text-decoration-line: underline;
          transition: filter 0.2s;

          &:hover, :focus {
            filter: brightness(0.7);
          } 
        }
      }
    }
  }

  @media(max-width: 1440px) {
    article {
      div {
        max-width: 100%;
        margin-right: 10rem;

        p {
          font-size: 2.5rem;
          font-weight: 500;
        }
      
        span > a {
          font-size: 1.5rem;
          text-decoration-line: underline;
          transition: filter 0.2s;

          &:hover, :focus {
            filter: brightness(0.7);
          } 
        }
      }
    }
  }
  @media(max-width: 1080px) {
    display: block;
    article {
      display: flex;
      justify-content: center;
      height: 92vh;

      div {
        display: flex;  
        justify-content: center;  
        align-items: center;
        max-width: 80%;  
        margin-top: 3rem;
        margin-right: 0px;
        gap: 2rem;
        height: fit-content;

        p {
          font-weight: 500;
          text-align: center;
        }
      
        span {
          text-align: center;

          a {
            font-size: 2.5rem;
            text-decoration-line: underline;
            transition: filter 0.2s;

            &:hover, :focus {
              filter: brightness(0.7);
            } 
          }
        }
      }
    }
  }

  @media(max-width: 760px) {
    article {
      div {
        gap: 1rem;
        p {
          font-size: 2rem;
        }
        span {
          a {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
  @media(max-width: 480px) {
    background-position: 15% center;
    article {
      div {
        gap: 1rem;
        p {
          font-size: 1.5rem;
        }
        span {
          a {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`