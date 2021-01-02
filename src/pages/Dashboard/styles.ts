import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 3.6rem;

  h1 {
    font-size: 2.6rem;

    strong {
      color: var(--color-text-green);
    }
  }
`;
