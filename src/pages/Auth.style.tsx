import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  & > svg {
    margin-right: 6px;
  }
`;

export const InfoText = styled.span`
  display: block;
  width: fit-content;
  font-size: 18px;
  color: rgba(33, 36, 59, 0.8);
  font-weight: bold;
  /* padding-bottom: 15px; */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.7); */
  /* margin-bottom: 40px; */
`;

export const Info = ({ children }: { children: React.ReactNode }) => (
  <InfoContainer>
    <AiFillInfoCircle size={20} color="rgba(33, 36, 59, 0.8)" />
    <InfoText>{children}</InfoText>
  </InfoContainer>
);

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  & > * {
    margin-bottom: 12px;
    &: last-child {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled.button`
  border-radius: 3px;
  cursor: pointer;
  /* border-radius: calc(55px / 2); */
  width: 100%;
  font-size: 20px;
  border: 0;
  padding: 19px 0;
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  background-color: #da367f;
  color: white;
  outline: none;
  margin-bottom: 20px;
  &: last-child {
    margin-bottom: 0;
  }
`;

export const TextButton = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  padding: 0;
  background: none;
  font-size: 18px;
  margin-left: auto;
  outline: 0;
  text-decoration: none;
  color: #81224c !important;
  font-weight: bold;
  opacity: 0.5;
  & > span {
    margin-right: 6px;
  }
`;

export const ProfileImageWrap = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 150px;
  overflow: hidden;
  margin: 0 auto 40px auto;
`;

export const ProfileImage = styled.img`
  width: 100%;
`;

export const NotFoundImage = styled.img`
  width: 100%;
`;

export const LottieWrap = styled.div`
  margin-bottom: 20px;
`;
