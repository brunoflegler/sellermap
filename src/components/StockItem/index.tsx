import React from 'react';

import { Container, Item, Header, Description } from './styles';

interface ItemProps {
  id?: string;
  code: string;
  name: string;
  cost: number;
  qtd: number;
  total: number;
  handleUpdate: (data: any) => void;
}

const StockItem: React.FC<ItemProps> = ({
  code,
  name,
  cost,
  qtd,
  total,
  handleUpdate,
}) => {
  return (
    <Container>
      <Item onClick={handleUpdate}>
        <Header>
          <p>{name}</p>
          <span>{`R$ ${cost}`}</span>
        </Header>
        <Description>
          <p>{`Qtd: ${qtd}`}</p>
          <span>{`R$ ${total}`}</span>
        </Description>
      </Item>
    </Container>
  );
};

export default StockItem;
