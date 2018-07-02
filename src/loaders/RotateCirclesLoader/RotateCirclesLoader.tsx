import * as React from 'react';

import * as styles from './RotateCirclesLoader.css';

export interface RotateCirclesLoaderProps {
  color1?: string;
  color2?: string;
}

export class RotateCirclesLoader extends React.Component<RotateCirclesLoaderProps> {
  static defaultProps: Partial<RotateCirclesLoaderProps> = {
    color1: '#666',
    color2: '#066'
  };

  render() {
    const { color1, color2 } = this.props;
    return (
      <div className={styles.loader}>
        <div className={styles.circle1} style={{ backgroundColor: color1 }}/>
        <div className={styles.circle2} style={{ backgroundColor: color2 }}/>
      </div>
    );
  }
}
