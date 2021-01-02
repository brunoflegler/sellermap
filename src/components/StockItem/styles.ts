import styled from 'styled-components';

export const Container = styled.div``;

export const Item = styled.li`
  background: #fff;
  margin: 1rem;
  border-radius: 0.2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-text-black);
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-text-black);
  }
`;

export const Description = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.8rem 0.8rem 0.8rem;

  p {
    font-size: 1rem;
    color: var(--color-text-gray);
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-text-green);
  }
`;
