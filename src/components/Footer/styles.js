import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 220px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50px;
  grid-template-areas:
    "about socials"
    "copyright  copyright";
  justify-items: center;
  align-items: center;
  background: var(--bg);

  div:first-of-type {
    grid-area: about;
    display: flex;
    flex-direction: column;
    span{
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    nav {
      ul {
        display: flex;
        gap: 2rem;
        li{

          a{

          }
        }
      }
    }
  }

  div:last-of-type {
    grid-area: socials;
    display: flex;
    flex-direction: column;
    span{
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    nav {
      ul {
        display: flex;
        gap: 1rem;
        li{
          a{
            display: flex;
            svg {
              height: 1.5rem;
              width: 1.5rem;
            }
          }
        }
      }
    }
  }

  &>span {
    grid-area: copyright;
    font-size: 0.875rem;
    margin-bottom: 3rem;
  }

  @media(max-width: 1080px) {
    height: 260px;
    div:first-of-type {
      span{
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
      nav {
        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li{

            a{

            }
          }
        }
      }
    }

    div:last-of-type {
      grid-area: socials;
      display: flex;
      flex-direction: column;
      span{
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
      nav {
        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          li{
            a{
              display: flex;
              svg {
                height: 1rem;
                width: 1rem;
              }
            }
          }
        }
      }
    }

    &>span {
      grid-area: copyright;
      font-size: 0.875rem;
      margin-bottom: 3rem;
    }
  }
`