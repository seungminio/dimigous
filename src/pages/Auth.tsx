import React, { useEffect, useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';
import Lottie from 'react-lottie';

import InputWithLabel from '../components/InputWithLabel';
import AuthServiceWrapper from '../components/AuthServiceWrapper';
import {
  Info,
  InputWrap,
  Button,
  TextButton,
  NotFoundImage,
  Form,
  LottieWrap,
} from './Auth.style';

import useQueryString from '../utils/useQueryString';
import { api } from '../utils/api';

import animationData from '../assets/connect_animation.json';
import Input from '../components/Input';

const Auth: React.FC = () => {
  const [info, setInfo] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [needConfirm, setNeedConfirm] = useState(false);
  const query = useQueryString();

  useEffect(() => {
    api
      .get('/service/info', { params: { clientId: query.client_id } })
      .then(({ data }) => {
        setName(data.name);
      })
      .catch((err) => {
        setError(true);
        // alert(err.response.data.message);
      });
  }, [query.client_id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const confirmInfo = await api.post('/account/confirm/info', {
      ...info,
      clientId: query.client_id,
    });
    if (confirmInfo.data.confirmed) {
      await handleLogin();
    } else {
      setNeedConfirm(true);
    }
  };

  const handleConfirmSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const requestConfirm = await api.post('/account/confirm', {
        ...info,
        clientId: query.client_id,
      });
      alert(requestConfirm.data.message);
      handleLogin();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const {
        data: { accessToken },
      } = await api.post('/account/login', {
        ...info,
        clientId: query.client_id,
      });
      window.location.href = `${query.redirect_uri}?token=${accessToken}`;
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleChange = (e: any) => {
    e.persist();
    setInfo((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <AuthServiceWrapper
      info={
        error ? (
          '서비스를 찾을 수 없습니다.'
        ) : needConfirm ? (
          <>
            <b>{name}</b> 서비스에 연결 하시겠습니까?
          </>
        ) : (
          <>
            통합 계정으로 <b>{name}</b> 서비스에 로그인합니다.
          </>
        )
      }
    >
      {error ? (
        <NotFoundImage src={require('../assets/404.svg')} />
      ) : needConfirm ? (
        <Form onSubmit={handleConfirmSubmit}>
          <LottieWrap>
            <Lottie options={defaultOptions} />
          </LottieWrap>
          <Button type="submit">로그인</Button>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <Input
              placeholder="아이디"
              id="username"
              type="text"
              value={info.username}
              onChange={handleChange}
            />
            <Input
              placeholder="비밀번호"
              id="password"
              type="password"
              value={info.password}
              onChange={handleChange}
            />
          </InputWrap>
          <Button type="submit">로그인</Button>
          <TextButton to="/global">
            <span>통합 계정으로 전환</span>
            <FiArrowRight />
          </TextButton>
        </Form>
      )}
    </AuthServiceWrapper>
  );
};

export default Auth;
