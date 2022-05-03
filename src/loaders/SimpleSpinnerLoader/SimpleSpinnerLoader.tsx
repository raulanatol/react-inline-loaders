import React, { FC, memo } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotateForeverAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

const Container = styled.div`
  background-color: ${props => props.color};
  height: 46px;
  width: 46px;
`;

const Spinner = styled.div<any>`
  display: inline-block;
  position: relative;
  animation: ${rotateForeverAnimation} 0.75s infinite;
  animation-timing-function: linear;
  height: 30px;
  width: 30px;
  border: 8px solid #ffffff;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  border-right-color: transparent;
  border-left-color: ${props => props.color};
  border-bottom-color: ${props => props.color};
  border-top-color: ${props => props.color};
`;

export interface SimpleSpinnerLoaderProps {
  color?: string;
  backgroundColor?: string;
}

export const SimpleSpinnerLoader: FC<SimpleSpinnerLoaderProps> = memo((props) => {
  const { color = '#666', backgroundColor = 'transparent' } = props;
  return <Container color={backgroundColor} role="status" aria-label="loading">
    <Spinner color={color} backgroundColor={backgroundColor}/>
  </Container>;
});
