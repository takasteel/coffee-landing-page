import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: 8vh;
  max-width: 100vw;
  background: var(--bg);
  z-index: 1;
  position: sticky;
  top: 0;
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
  display: flex;
  flex-direction: column;
`