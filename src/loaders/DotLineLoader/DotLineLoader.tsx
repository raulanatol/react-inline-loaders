import * as React from 'react';
import * as styles from './DotLineLoader.css';

export interface DotLineLoaderProps {
  color?: string;
}

export class DotLineLoader extends React.Component<DotLineLoaderProps> {
  static defaultProps: Partial<DotLineLoaderProps> = {
    color: '#666'
  };

  render() {
    const propsStyle = {
      background: this.props.color
    };
    return (
      <div className={styles.loader}>
        <div className={styles.dot1} style={propsStyle}/>
        <div className={styles.dot2} style={propsStyle}/>
        <div className={styles.dot3} style={propsStyle}/>
        <div className={styles.dot4} style={propsStyle}/>
        <div className={styles.dot5} style={propsStyle}/>
        <div className={styles.dot6} style={propsStyle}/>
        <div className={styles.dot7} style={propsStyle}/>
        <div className={styles.dot8} style={propsStyle}/>
      </div>
    );
  }
}
