import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import StockForm from './pages/StockForm';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />

      <Route path="/stocks" component={Stock} />
      <Route exact path="/stock" component={StockForm} />
      <Route path="/stock/:code" component={StockForm} />

      <Route path="/incomes" component={Stock} />
      <Route path="/buildings" component={Stock} />
    </BrowserRouter>
  );
};

export default Routes;
