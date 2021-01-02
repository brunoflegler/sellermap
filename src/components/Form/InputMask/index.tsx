import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import ReactInputMask from 'react-text-mask';

import { useField } from '@unform/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const defaultCurrencyOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

const currencyMask = createNumberMask({
  ...defaultCurrencyOptions,
  inputMode: 'numeric',
});

const InputMask: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  console.log(fieldName);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <ReactInputMask
        mask={currencyMask}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default InputMask;
