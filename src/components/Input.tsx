import React, { useState, useEffect, useRef } from 'react';
import css from '@emotion/css';
import styled from '@emotion/styled';

import useStateWithCallback from '../utils/useStateWithCallback';

export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  info?: string;
  error?: boolean;
  onChange?: (e: any) => void;
}

const Input = ({
  type: inputType,
  value,
  info,
  onChange,
  error,
  ...props
}: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [newType, setNewType] = useState<string>(inputType || 'text');
  const [visible, setVisible] = useState<boolean>(false);
  const [removeIconVisible, setRemoveIconVisible] = useStateWithCallback<
    boolean
  >(true);

  useEffect(() => {
    if (inputType === 'password') {
      if (visible) setNewType('text');
      else setNewType('password');
    }
  }, [visible, inputType]);

  useEffect(() => {
    if (value && value.toString().length > 0) {
      setRemoveIconVisible(true);
    }
  }, [value, setRemoveIconVisible]);

  const handleRemove = () => {
    setRemoveIconVisible(false, () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    });
  };

  return (
    <Container
      focus={isFocus}
      error={error || false}
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      <StyledInput
        id={`${inputType === 'file' && 'fileInput'}`}
        ref={inputRef}
        type={newType}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
      {inputType === 'file' && (
        <PlaceHolder htmlFor="fileInput">{props.placeholder}</PlaceHolder>
      )}
      {info && <Info>{info}</Info>}
      {!info && value && removeIconVisible && (
        <RemoveIcon
          src={require('../assets/removeinput.svg')}
          onClick={handleRemove}
        />
      )}
      {inputType === 'password' &&
        (visible ? (
          <Icon
            src={require('../assets/notshow.svg')}
            onClick={() => setVisible(false)}
          />
        ) : (
          <Icon
            src={require('../assets/show.svg')}
            onClick={() => setVisible(true)}
          />
        ))}
      {inputType === 'file' && (
        <Icon src={require('../assets/attachment.svg')} />
      )}
      <Info />
    </Container>
  );
};

const Container = styled.div<{ error: boolean; focus: boolean }>`
  display: flex;
  align-items: center;
  cursor: text;
  width: 100%;
  /* padding: 17px 0; */
  padding: 10px;
  border: solid 1.5px rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  ${({ error }) =>
    error &&
    css`
      border: solid 1.5px #ff2d1b;
    `}

  ${({ focus }) =>
    focus &&
    css`
      border: solid 1.5px #da367f;
    `}
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  font-size: 16px;
  outline: 0;
  background: none;
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  ${({ type }) => type === 'file' && `display: none;`}
`;

const PlaceHolder = styled.label`
  width: 100%;
  color: rgba(33, 36, 59, 0.8);
  cursor: pointer;
`;

const Icon = styled.img`
  width: 18px;
  cursor: pointer;
  margin-left: 8px;
`;

const RemoveIcon = styled.img`
  cursor: pointer;
`;

const Info = styled.span`
  width: fit-content;
  font-size: 13px;
  color: #2c68ff;
`;

export default Input;
