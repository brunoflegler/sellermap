import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Footer, GoBackHome } from './styles';

const NavBar: React.FC = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <Footer>
        <GoBackHome onClick={handleGoHome} />
      </Footer>
    </Container>
  );
};

export default NavBar;
