import styled from '@emotion/styled';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  theme: {
    brandTitle: 'React Inline Loaders',
    brandUrl: 'https://natol.es/react-inline-loaders'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#FFF' },
      { name: 'black', value: '#000' }
    ]
  }
};

const Center = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const center = (Story) => <Center><Story/></Center>;

export const decorators = [center];
