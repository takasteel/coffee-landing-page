import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: 8vh;
  width: 100%;
  background: var(--bg);
  z-index: 1;
  position: sticky;
  top: 0;

  @media(max-width: 1280px) {
    display: flex;
    align-items: center;
  }
`

export const BigMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  gap: 3rem;
  
  span {
    font-size: 3rem;
    font-weight: 700;
  }

  nav > ul {
    display: flex;
    gap: 3rem;
  }

  div > a:first-child {
    margin-right: 3rem;
  }
`

export const SmallMenu = styled.div`
  margin: 8vh 1.5rem 0 1.5rem;
  nav {
    a {
      span {
        font-size: 28px;
        font-weight: 700;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: 1rem;
      margin-top: 2rem;
    }
  }

`
export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  a {
    span {
      font-size: 28px;
      font-weight: 700;
    }
  }
  
`