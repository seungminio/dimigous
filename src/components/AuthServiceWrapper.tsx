import React from 'react';
import styled from '@emotion/styled';

const AuthServiceWrapper = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <Box>
      <LogoWrapper>
        <Logo src="https://www.dimigo.hs.kr/layouts/minimal_dimigo/static/dimigo_logo_white.png" />
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
  background-image: url('https://www.dimigo.hs.kr/layouts/minimal_dimigo/images/background.jpg');
  background-color: black;
  background-size: cover;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 550px;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 80px 60px;
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
