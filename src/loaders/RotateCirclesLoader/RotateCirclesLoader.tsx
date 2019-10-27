import React, { memo, FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Loader = styled.div`
  display: flex;
  width: 100px;
  height: 45px;
`;

const CircleBase = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  opacity: .75;
  background-color: ${props => props.color};
`;

const circle1Anim = keyframes`
  0%, 100% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
  25% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: .25;
  }
  50% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
  75% {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    opacity: .8;
  }
`;

const circle2Anim = keyframes`
  0%, 100% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
  25% {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    opacity: .8;
  }
  50% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
  75% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: .25;
  }
`;

const Circle1 = styled(CircleBase)`
  animation: ${circle1Anim} 2s infinite linear;
`;

const Circle2 = styled(CircleBase)`
  animation: ${circle2Anim} 2s infinite linear;
`;

export interface RotateCirclesLoaderProps {
  color1?: string;
  color2?: string;
}

export const RotateCirclesLoader: FC<RotateCirclesLoaderProps> = memo((props) => {
  const { color1 = '#666', color2 = '#066' } = props;
  return <Loader>
    <Circle1 color={color1}/>
    <Circle2 color={color2}/>
  </Loader>;
});
