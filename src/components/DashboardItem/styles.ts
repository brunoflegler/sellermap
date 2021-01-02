import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Article = styled(Link)`
  background: var(--color-background-white);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.3rem;
  width: 90%;
  margin-top: 1.2rem;
  text-decoration: none;
`;

export const Header = styled.header`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: row;
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  p {
    font-size: 1rem;
    color: var(--color-text-gray);
    font-weight: 500;
    margin-top: 0.8rem;
  }

  strong {
    font-size: 1.6rem;
    color: #000;
    margin-top: 0.8rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.8rem;
    height: auto;
  }

  h1 {
    font-size: 1.2rem;
    color: var(--color-text-gray);
    font-weight: 500;
    margin-left: 0.8rem;
  }
`;

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  h1 {
    font-size: 1.3rem;
    color: var(--color-text-green);
    font-weight: 700;
  }
`;
