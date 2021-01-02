import React from 'react';

import {
  Container,
  Article,
  Header,
  SideLeft,
  SideRight,
  Title,
} from './styles';

interface DashboardItemProps {
  title: string;
  description?: string;
  value: string;
  icon: string;
  percentage?: string;
  to: string;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
  title,
  description = 'Saldo Atual',
  value,
  icon,
  percentage,
  to,
}) => (
  <Container>
    <Article to={to}>
      <Header>
        <SideLeft>
          <Title>
            <img src={icon} alt="Ícone de investimentos" />
            <h1>{title}</h1>
          </Title>
          {description && <p>{description}</p>}
          <strong>{value}</strong>
        </SideLeft>
        <SideRight>{percentage && <h1>{percentage}</h1>}</SideRight>
      </Header>
    </Article>
  </Container>
);

export default DashboardItem;
