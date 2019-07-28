import React, { memo } from 'react';
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
    background: ${props => props.theme.background};
    height: 5px;
    width: 5px;
    opacity: 0;
    border-radius: 50%;
    transform: translateX(-300px);
    margin: 0 2px 0 2px;
  }
`;

const Dot = styled.div`
  animation: ${animation} 4s infinite;
  animation-delay: ${props => props.theme.delay};
`;

export interface DotLineLoaderProps {
  color?: string;
}

export const DotLineLoader = memo((props: DotLineLoaderProps) => {
  const theme = {
    background: props.color || '#666'
  };

  return <Container theme={theme}>
    <Dot theme={{ delay: '.8s' }}/>
    <Dot theme={{ delay: '.7s' }}/>
    <Dot theme={{ delay: '.6s' }}/>
    <Dot theme={{ delay: '.5s' }}/>
    <Dot theme={{ delay: '.4s' }}/>
    <Dot theme={{ delay: '.3s' }}/>
    <Dot theme={{ delay: '.2s' }}/>
    <Dot theme={{ delay: '.1s' }}/>
  </Container>;
});

