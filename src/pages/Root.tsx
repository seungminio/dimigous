import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import InputWithLabel from '../components/InputWithLabel';

const Root: React.FC = () => {
  return (
    <Container>
      <Box>
        <LogoWrapper>
          <Logo src="https://www.dimigo.hs.kr/layouts/minimal_dimigo/static/dimigo_logo_white.png" />
        </LogoWrapper>
        <Info>
          디미고 계정으로 <b>디미고인</b> 서비스에 로그인합니다.
        </Info>
        <InputWrap>
          <InputWithLabel label="아이디" id="id" type="text" />
          <InputWithLabel label="비밀번호" id="password" type="password" />
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
  justify-content: flex-end;
  /* align-items: center; */
  background-image: url('https://www.dimigo.hs.kr/layouts/minimal_dimigo/images/background.jpg');
  background-color: black;
  background-size: cover;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 580px;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 80px;
  /* border-radius: 50px; */
  /* box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff; */
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
`;

const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 55px;
  & > * {
    margin-bottom: 20px;
    &: last-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled.button`
  height: 44px;
  border-radius: 3px;
  cursor: pointer;
  /* border-radius: calc(55px / 2); */
  width: 100%;
  font-size: 20px;
  border: 0;
  padding: 2px 16px;
  font-size: 16px;
  background-color: #da367f;
  color: white;
  outline: none;
  font-weight: bold;
`;

export default Root;
