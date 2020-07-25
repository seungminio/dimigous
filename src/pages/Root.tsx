import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';

const Root: React.FC = () => {
  return (
    <Container>
      <Box>
        <LogoWrapper>
          <Logo src={require('../assets/dimigo_logo.png')} />
        </LogoWrapper>
        <Info>
          디미고 계정으로 <b>디미고인</b> 서비스에 로그인합니다.
        </Info>
        <InputWrap>
          <Input id="id" type="text" placeholder="아이디" />
          <Input id="password" type="password" placeholder="비밀번호" />
        </InputWrap>
        <Button>로그인</Button>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.dimigo.hs.kr/layouts/minimal_dimigo/images/background.jpg');
  background-color: black;
  background-size: cover;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 610px;
  background-color: white;
  padding: 80px;
  border-radius: 50px;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const LogoWrapper = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;

const Info = styled.span`
  font-size: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #999;
  margin-bottom: 40px;
`;

const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 40px;
  & > * {
    margin-bottom: 25px;
    &: last-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled.button`
  height: 55px;
  cursor: pointer;
  border-radius: calc(55px / 2);
  width: 100%;
  font-size: 20px;
  border: 0;
  padding: 17px;
  background-color: #da367f;
  color: white;
  outline: none;
  font-weight: bold;
`;

export default Root;
