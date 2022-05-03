import React, { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  33% {
    transform: translate(0, 0);
    opacity: 0.7;
  }
  66% {
    transform: translate(0, 0);
    opacity: 0.7;
  }
`;

const Container = styled.div`
  width: 50px;
  line-height: 10px;
  height: 50px;

  & > div {
    display: inline-block;
    width: 15px;
    height: 15px;
    opacity: 0.2;
    background: ${props => props.color};
    margin: 3px;
    animation: ${animation} 2s infinite;
  }
`;

const Square1 = styled.div`
  opacity: 0.5;
  transform: translate(0, -25px);
`;

const Square2 = styled.div`
  opacity: 0.5;
  transform: translate(25px, 0);
`;

const Square3 = styled.div`
  opacity: 0.5;
  transform: translate(-25px, 0);
`;

const Square4 = styled.div`
  opacity: 0.5;
  transform: translate(0, 25px);
`;

export interface CenterSquaresLoaderProps {
  color?: string;
}

export const CenterSquaresLoader: FC<CenterSquaresLoaderProps> = ({ color = '#4092de' }) =>
  <Container color={color} role="status" aria-label="loading">
    <Square1/>
    <Square2/>
    <Square3/>
    <Square4/>
  </Container>;

