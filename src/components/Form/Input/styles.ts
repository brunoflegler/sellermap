import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0rem 1rem;

  label {
    color: var(--color-text-black);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 4.2rem;
    border-radius: 0.8rem;
    background: var(--color-background-white);
    border: 1px solid var(--color-text-gray);
    color: var(--color-text-gray);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    ::placeholder {
      font: 1.4rem Archivo;
      color: var(--color-text-gray-ligth);
    }
  }

  span {
    color: red;
  }
`;
