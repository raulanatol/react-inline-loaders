import React, { FC } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const animation = keyframes`
  0% {
    opacity: 0.5
  }
  30% {
    opacity: 0.5
  }
  60% {
    opacity: 0
  }
  75% {
    opacity: 0
  }
  100% {
    opacity: 0.5
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
    opacity: 1;
    background: ${props => props.color};
    margin: 3px;
    animation: ${animation} 2.8s infinite;
  }
`;

const Square1 = styled.div`
  opacity: 0.5;
`;

const Square2 = styled.div`
  opacity: 0.5;
  animation-delay: .7s;
`;

const Square3 = styled.div`
  opacity: 0.5;
  animation-delay: 2.1s;
`;

const Square4 = styled.div`
  opacity: 0.5;
  animation-delay: 1.4s;
`;

export interface ChasingSquaresLoaderProps {
  color?: string;
}

export const ChasingSquaresLoader: FC<ChasingSquaresLoaderProps> = (props) => {
  const { color = '#4092de' } = props;

  return <Container color={color} role="status" aria-label="loading">
    <Square1/>
    <Square2/>
    <Square3/>
    <Square4/>
  </Container>;
};
