import React from 'react';
import styled from '@emotion/styled';
import { sample } from 'lodash';
import { Info } from '../pages/Auth.style';

const image = sample([
  'http://www.dimigo.hs.kr/files/attach/images/4985139/141/985/004/9f28a0c7a1c3d6425e5187a55d4d8d2b.JPG',
  'https://www.dimigo.hs.kr/files/attach/images/4985139/145/985/004/ec99eb1f46e2e9761a1fb19de1fc0d60.jpg',
  'https://www.dimigo.hs.kr/files/attach/images/4985139/744/596/005/df3e4904e2d8101eb385fcaea4e9dcac.JPG',
  'https://www.dimigo.hs.kr/files/attach/images/239/816/590/005/533d763804a3a0b33e71d0f4a789806e.jpg',
  'https://lh3.ggpht.com/p/AF1QipPudigOr7a3dj0HBC52GJCqgYvxXsUHTQem0R9C=s1024',
  'https://www.dimigo.hs.kr/layouts/minimal_dimigo/images/background.jpg',
  // 'https://www.dimigo.hs.kr/layouts/minimal_dimigo/images/4.jpg',
]);

const AuthServiceWrapper = ({
  children,
  info,
}: {
  children: React.ReactNode;
  info?: React.ReactNode | string;
}) => (
  <Container>
    <BackgroundImageWrapper>
      <BlackOverlay />
      <BackgroundImage src={image} draggable={false} />
    </BackgroundImageWrapper>
    <Box>
      <LogoWrapper>
        <Logo src={require('../assets/logo.svg')} />
        <InfoWrap>
          <LogoText>DIMIGOUS</LogoText>
          <Info>{info}</Info>
        </InfoWrap>
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
`;

const BackgroundImageWrapper = styled.div`
  display: block;
  position: absolute;
  width: calc(100% - 500px);
  height: 100%;
  top: 0;
  left: 0;
  /* opacity: 0.9; */
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlackOverlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
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
  padding: 0 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  /* border-radius: 50px; */
  box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  height: 80px;
  margin-right: 20px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.8);
`;

export default AuthServiceWrapper;
