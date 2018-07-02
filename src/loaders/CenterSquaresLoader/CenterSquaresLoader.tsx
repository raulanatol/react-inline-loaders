import * as React from 'react';

import * as styles from './CenterSquaresLoader.css';

export interface CenterSquaresLoaderProps {
  color?: string;
}

export class CenterSquaresLoader extends React.Component<CenterSquaresLoaderProps> {
  static defaultProps: Partial<CenterSquaresLoaderProps> = {
    color: '#666'
  };

  render() {
    const propsStyle = {
      background: this.props.color
    };

    return <div className={styles.container}>
      <div className={styles.square1} style={propsStyle}/>
      <div className={styles.square2} style={propsStyle}/>
      <div className={styles.square3} style={propsStyle}/>
      <div className={styles.square4} style={propsStyle}/>
    </div>;
  }
}

