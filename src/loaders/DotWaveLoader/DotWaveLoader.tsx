import React, { FC, memo } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  0% {
    transform: translateY(0px)
  }
  35% {
    transform: translateY(0px);
    opacity: 0.3
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.8
  }
  70% {
    transform: translateY(3px);
    opacity: 0.8
  }
  85% {
    transform: translateY(-3px)
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
`;

const LoaderDot = styled.div`
  height: 50px;
  width: 80px;
`;

const Dot = styled.div`
  display: inline-block;
  background: ${props => props.color};
  height: 8px;
  width: 8px;
  opacity: 0.3;
  border-radius: 50%;
  animation: ${animation} 1.8s infinite;
`;

const Dot2 = styled(Dot)`
  animation-delay: .15s;
`;

const Dot3 = styled(Dot)`
  animation-delay: .3s;
`;

const Dot4 = styled(Dot)`
  animation-delay: .45s;
`;

const Dot5 = styled(Dot)`
  animation-delay: .6s;
`;

export interface DotWaveLoaderProps {
  color?: string;
}

export const DotWaveLoader: FC<DotWaveLoaderProps> = memo((props) => {
  const { color = '#4092de' } = props;
  return <Container>
    <LoaderDot>
      <Dot color={color}/>
      <Dot2 color={color}/>
      <Dot3 color={color}/>
      <Dot4 color={color}/>
      <Dot5 color={color}/>
    </LoaderDot>
  </Container>;
});
