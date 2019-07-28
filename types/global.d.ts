import '@testing-library/jest-dom/extend-expect';

declare module '*.css' {
  const styles: any;
  export = styles;
}
