import React from 'react';
import styled from '@emotion/styled';

import Input, { IInput } from './Input';

const InputWithLabel = ({
  label,
  error,
  errorMessage,
  ...props
}: { label: string; error?: boolean; errorMessage?: string } & IInput) => {
  return (
    <Wrapper>
      <Info>
        <Label>{label}</Label>
        {error && <Error>{errorMessage}</Error>}
      </Info>
      <Input error={error} {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  display: block;
  font-size: 18px;
  color: white;
  margin-bottom: 12px;
`;

const Error = styled.span`
  font-size: 12px;
  color: #ff2d1b;
`;

export default InputWithLabel;
