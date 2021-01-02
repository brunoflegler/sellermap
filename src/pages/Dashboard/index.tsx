import React, { useEffect, useState } from 'react';

import walletIcon from '../../assets/images/icons/wallet.png';
import DashboardItem from '../../components/DashboardItem';
import { api } from '../../services';
import { Container, Header } from './styles';

interface DashboardProps {
  stocks: {
    total: string;
  };
  sales: {
    total: string;
  };
}

const Dasboard: React.FC = () => {
  const [dashboard, setDashboard] = useState<DashboardProps>({
    stocks: {
      total: '0',
    },
    sales: {
      total: '0',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/dashboard');

      const normalized = {
        stocks: {
          total: (data.stocks.total / 100).toFixed(2),
        },
        sales: {
          total: (data.sales.total / 100).toFixed(2),
        },
      };

      setDashboard(normalized);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <h1>
          Seller,
          <strong> Bruno</strong>
        </h1>
      </Header>

      <DashboardItem
        to="/stocks"
        title="Estoque"
        value={`R$ ${dashboard?.stocks.total}`}
        icon={walletIcon}
      />
      <DashboardItem
        to="/"
        title="Vendas diária"
        value={`R$ ${dashboard?.sales.total}`}
        icon={walletIcon}
      />
    </Container>
  );
};

export default Dasboard;
