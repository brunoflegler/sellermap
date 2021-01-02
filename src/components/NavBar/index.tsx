import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Header,
  Title,
  ActionIcon,
  ConfirmActionIcon,
  Button,
  GoBackIcon,
} from './styles';

interface NavBarProps {
  title: string;
  action?: () => void;
  isSubmit?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ title, action, isSubmit = false }) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Header>
        <GoBackIcon onClick={handleGoBack} />
        <Title>{title}</Title>
        {isSubmit ? (
          <Button onClick={action} type="submit">
            <ConfirmActionIcon />
          </Button>
        ) : (
          <ActionIcon onClick={action} />
        )}
      </Header>
    </Container>
  );
};

export default NavBar;
