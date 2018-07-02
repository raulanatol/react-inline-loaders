import * as React from 'react';
import styles from './SimpleSpinnerLoader.css';

export interface SimpleSpinnerLoaderProps {
  color?: string;
  backgroundColor?: string;
}

export class SimpleSpinnerLoader extends React.Component<SimpleSpinnerLoaderProps> {
  static defaultProps: Partial<SimpleSpinnerLoaderProps> = {
    color: '#666',
    backgroundColor: 'transparent'
  };

  render() {
    const propsStyle = {
      background: this.props.backgroundColor,
      borderLeftColor: this.props.color,
      borderBottomColor: this.props.color,
      borderTopColor: this.props.color
    };

    return (
      <div className={styles.container} style={{ backgroundColor: this.props.backgroundColor }}>
        <div className={styles.spinner} style={propsStyle}/>
      </div>
    );
  }
}
