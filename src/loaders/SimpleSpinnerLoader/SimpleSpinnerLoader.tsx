import * as React from 'react';
import { keyframes } from '@emotion/core';
import { memo } from 'react';
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
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  height: 60px;
  width: 60px;
  margin: -30px 0 -30px;
`;

const Spinner = styled.div`
  position: relative;
  top: 14%;
  right: 0;
  bottom: 0;
  left: 14%;
  animation: ${rotateForeverAnimation} 0.75s infinite;
  animation-timing-function: linear;
  height: 30px;
  width: 30px;
  margin: 123px;
  border: 8px solid #ffffff;
  border-radius: 50%;
  display: inline-block;
  background-color: ${props => props.theme.backgroundColor};
  border-right-color: transparent;
  border-left-color: ${props => props.theme.color};
  border-bottom-color: ${props => props.theme.color};
  border-top-color: ${props => props.theme.color};
`;

export interface SimpleSpinnerLoaderProps {
  color?: string;
  backgroundColor?: string;
}

export const SimpleSpinnerLoader = memo((props: SimpleSpinnerLoaderProps) => {
  const { color = '#666', backgroundColor = 'transparent' } = props;
  const theme = { color, backgroundColor };
  return <Container color={backgroundColor}>
    <Spinner theme={theme}/>
  </Container>;
});
