import * as React from 'react';

import * as styles from './ChasingSquaresLoader.css';

export interface ChasingSquaresLoaderProps {
  color?: string;
}

export class ChasingSquaresLoader extends React.Component<ChasingSquaresLoaderProps> {
  static defaultProps: Partial<ChasingSquaresLoaderProps> = {
    color: '#666'
  };

  render() {
    const propsStyle = {
      background: this.props.color
    };
    return (
      <div className={styles.container}>
        <div className={styles.square} style={propsStyle}/>
        <div className={styles.square2} style={propsStyle}/>
        <div className={styles.square3} style={propsStyle}/>
        <div className={styles.square4} style={propsStyle}/>
      </div>
    );
  }
}
