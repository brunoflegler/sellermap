import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { Input } from '../../components/Form';
import NavBar from '../../components/NavBar';
import { api } from '../../services';
import { Container, Main } from './styles';

interface FormFieldProps {
  _id: string;
  code: string;
  name: string;
  qtd: number;
  cost: number;
  value: string;
}

interface ParamsProps {
  code?: string;
}

const StockForm: React.FC = () => {
  const [initialData, setInitialData] = useState<FormFieldProps>();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { code } = useParams<ParamsProps>();

  const hanbleSave: SubmitHandler<FormFieldProps> = async data => {
    const normalized = {
      ...data,
      cost: data.cost * 100,
    };

    if (initialData?._id) {
      await api.put(`/stocks/${initialData._id}`, normalized);
      history.push('/stocks');
    }

    await api.post('/stocks', normalized);
    history.push('/stocks');
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get(`/stocks/${code}`);

      setInitialData({
        ...data,
        cost: (data.cost / 100).toFixed(2),
      });
    };

    fetchData();
  }, [code]);

  return (
    <Container>
      <Form ref={formRef} initialData={initialData} onSubmit={hanbleSave}>
        <NavBar title="Ação" isSubmit />
        <Main>
          <Input
            label="Código:"
            name="code"
            placeholder="Digite o code da produto..."
          />
          <Input
            label="Nome:"
            name="name"
            placeholder="Digite o nome da produto..."
          />
          <Input
            label="Quantidade:"
            name="qtd"
            type="number"
            placeholder="Digite a quantidade do produto..."
          />
          <Input
            label="Custo:"
            name="cost"
            type="number"
            step=".01"
            placeholder="Digite o custo do produto..."
          />
          <Input
            label="Valor:"
            name="value"
            type="number"
            step=".01"
            placeholder="Digite o valor do produto..."
          />
        </Main>
      </Form>
    </Container>
  );
};

export default StockForm;
