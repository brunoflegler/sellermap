import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import FooterBar from '../../components/FooterBar';
import NavBar from '../../components/NavBar';
import StockItem from '../../components/StockItem';
import { api } from '../../services';
import { Container, Main, List } from './styles';

interface StockProps {
  code: string;
  name: string;
  cost: number;
  value: number;
  qtd: number;
  total: number;
}

const Stock: React.FC = () => {
  const history = useHistory();
  const [stocks, setStocks] = useState<StockProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/stocks');

      const normalized = data.map((stock: StockProps) => ({
        ...stock,
        cost: (stock.cost / 100).toFixed(2),
        total: ((stock.qtd * stock.cost) / 100).toFixed(2),
      }));

      setStocks(normalized);
    };
    fetchData();
  }, []);

  const handleCreateNewStock = () => {
    history.push('/stock');
  };

  const handleUpdateStock = (code: string) => {
    history.push(`/stock/${code}`);
  };

  return (
    <Container>
      <NavBar title="Estoque" action={handleCreateNewStock} />

      <Main>
        <List>
          {stocks &&
            stocks.map(stock => (
              <StockItem
                key={stock.code}
                code={stock.code}
                name={stock.name}
                qtd={stock.qtd}
                cost={stock.cost}
                total={stock.total}
                handleUpdate={() => handleUpdateStock(stock.code)}
              />
            ))}
        </List>
      </Main>
      <FooterBar />
    </Container>
  );
};

export default Stock;
