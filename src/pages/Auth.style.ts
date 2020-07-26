import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Info = styled.span`
  font-size: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
`;

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 55px;
  & > * {
    margin-bottom: 20px;
    &: last-child {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled.button`
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
  margin-bottom: 20px;
`;

export const TextButton = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  padding: 0;
  background: none;
  color: white;
  font-size: 18px;
  margin-left: auto;
  outline: 0;
  text-decoration: none;
  & > span {
    margin-right: 6px;
  }
`;
