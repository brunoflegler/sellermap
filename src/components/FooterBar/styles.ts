import { MdHome } from 'react-icons/md';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-background);
  height: 5rem;
  width: 100%;
  padding: 1.5rem;
`;

export const GoBackHome = styled(MdHome)`
  font-size: 2.6rem;
`;
