import * as React from 'react';
import * as styles from './LittleDotLoader.css';

export interface LittleDotLoaderProps {
  color?: string;
}

export class LittleDotLoader extends React.Component<LittleDotLoaderProps> {
  static defaultProps: Partial<LittleDotLoaderProps> = {
    color: '#666'
  };

  render() {
    const propsStyle = {
      background: this.props.color
    };

    return (
      <div className={styles.loader}>
        <div>
          <div className={styles.pulse} style={propsStyle}/>
          <div className={styles.explosion} style={propsStyle}/>
        </div>
      </div>
    );
  }
}
