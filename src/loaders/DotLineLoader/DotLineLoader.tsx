import React, { FC, memo } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  40% {
    transform: translateX(0px);
    opacity: 0.8
  }
  100% {
    transform: translateX(300px);
    opacity: 0
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 45%;
  margin: 5%;
  position: relative;

  & > div {
    display: inline-block;
    background: ${props => props.color};
    height: 5px;
    width: 5px;
    opacity: 0;
    border-radius: 50%;
    transform: translateX(-300px);
    margin: 0 2px 0 2px;
  }
`;

const Dot = styled.div<any>`
  animation: ${animation} 4s infinite;
  animation-delay: ${props => props.delay};
`;

export interface DotLineLoaderProps {
  color?: string;
}

export const DotLineLoader: FC<DotLineLoaderProps> = memo((props) => {
  const { color = '#4092de' } = props;

  return <Container color={color} role="status" aria-label="loading">
    <Dot delay=".8s"/>
    <Dot delay=".7s"/>
    <Dot delay=".6s"/>
    <Dot delay=".5s"/>
    <Dot delay=".4s"/>
    <Dot delay=".3s"/>
    <Dot delay=".2s"/>
    <Dot delay=".1s"/>
  </Container>;
});

