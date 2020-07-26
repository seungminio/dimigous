import React, { useEffect, useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';

import InputWithLabel from '../components/InputWithLabel';
import AuthServiceWrapper from '../components/AuthServiceWrapper';
import { Info, InputWrap, Button, TextButton } from './Auth.style';

import useQueryString from '../utils/useQueryString';
import { api } from '../utils/api';

const Root: React.FC = () => {
  const [name, setName] = useState('');
  const query = useQueryString();

  useEffect(() => {
    api
      .get('/service/info', { params: { clientId: query.client_id } })
      .then(({ data }) => {
        setName(data.name);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <AuthServiceWrapper>
      <Info>
        통합 계정으로 <b>{name}</b> 서비스에 로그인합니다.
      </Info>
      <InputWrap>
        <InputWithLabel label="아이디" id="id" type="text" />
        <InputWithLabel label="비밀번호" id="password" type="password" />
      </InputWrap>
      <Button>로그인</Button>
      <TextButton>
        <span>통합 계정으로 전환</span>
        <FiArrowRight />
      </TextButton>
    </AuthServiceWrapper>
  );
};

export default Root;
