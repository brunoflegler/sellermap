import { MdKeyboardBackspace, MdControlPoint, MdCheck } from 'react-icons/md';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-background);
  height: 5rem;
  width: 100%;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const ActionIcon = styled(MdControlPoint)`
  font-size: 2.6rem;
`;

export const ConfirmActionIcon = styled(MdCheck)`
  font-size: 2.6rem;
`;

export const GoBackIcon = styled(MdKeyboardBackspace)`
  font-size: 2.6rem;
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
`;
