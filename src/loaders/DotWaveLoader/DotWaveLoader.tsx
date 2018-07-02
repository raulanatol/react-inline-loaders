import * as React from 'react';

import * as styles from './DotWaveLoader.css';

export interface DotWaveLoaderProps {
  color?: string;
}

export class DotWaveLoader extends React.Component<DotWaveLoaderProps> {
  static defaultProps: Partial<DotWaveLoaderProps> = {
    color: '#666'
  };

  render() {
    const propsStyle = {
      background: this.props.color
    };

    return (
      <div className={styles.loader}>
        <div className={styles.loaderDots}>
          <div className={styles.dot} style={propsStyle}/>
          <div className={styles.dot2} style={propsStyle}/>
          <div className={styles.dot3} style={propsStyle}/>
          <div className={styles.dot4} style={propsStyle}/>
          <div className={styles.dot5} style={propsStyle}/>
        </div>
      </div>
    );
  }
}
