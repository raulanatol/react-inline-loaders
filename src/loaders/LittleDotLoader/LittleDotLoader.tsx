import React, { FC } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const pulseAnimation = keyframes`
  30% {
    transform: scale(0.7);
    opacity: 0.8
  }
  50% {
    transform: scale(1.1);
    opacity: 1.0
  }
  70% {
    transform: scale(0.8);
    opacity: 0.8
  }
`;

const radiusAnimation = keyframes`
  30% {
    transform: scale(0.7);
    opacity: 1
  }

  40% {
    transform: scale(7.8);
    opacity: 0.1
  }

  80% {
    transform: scale(4.8);
    opacity: 0
  }

  100% {
    transform: scale(1);
    opacity: 0
  }
`;

const Loader = styled.div`
  display: flex;
  position: relative;
`;

const Pulse = styled.div`
  background: ${props => props.color};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  animation: ${pulseAnimation} 1.5s infinite;
  position: absolute;
  opacity: 0.8;
  z-index: 5;
`;

const Explosion = styled.div`
  content: '';
  width: 15px;
  height: 15px;
  background: ${props => props.color};
  border-radius: 50%;
  position: absolute;
  animation: ${radiusAnimation} 1.5s infinite;
  z-index: 1;
`;

export interface LittleDotLoaderProps {
  color?: string;
}

export const LittleDotLoader: FC<LittleDotLoaderProps> = (props) => {
  const { color = '#4092de' } = props;

  return <Loader>
    <div>
      <Pulse color={color}/>
      <Explosion color={color}/>
    </div>
  </Loader>;
};
