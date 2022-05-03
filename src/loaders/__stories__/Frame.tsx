import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    border: 2px solid #154963;
    background-color: #fafaf9;
  }
`;

export const Frame: FC<any> = ({ children }) => {
  return <Container>
    {React.Children.map(children, child => <Item>{child}</Item>)}
  </Container>;
};
