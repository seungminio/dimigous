import React from 'react';
import styled from '@emotion/styled';

const AuthServiceWrapper = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube-nocookie.com/embed/kgJrQ889Jt4?controls=0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <Box>
      <LogoWrapper>
        <Logo src={require('../assets/dimigo_logo.png')} />
      </LogoWrapper>
      {children}
    </Box>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: flex-end;
  /* align-items: center; */
  /* background-image: url('https://www.dimigo.hs.kr/layouts/minimal_dimigo/images/background.jpg'); */
  background-size: cover;
`;

const Box = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 550px;
  background-color: white;
  padding: 0 36px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
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

export default AuthServiceWrapper;
