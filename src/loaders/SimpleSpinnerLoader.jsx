import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const rotateForeverAnimation = Radium.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
}, 'rotateForeverAnimation');

const style = {
  container: {
    backgroundColor: '#FF0000',
    position: 'absolute',
    top: '50%',
    right: '0',
    bottom: '0',
    left: '50%',
    height: '60px',
    width: '60px',
    margin: '-30px 0 -30px',
  },
  loader: {
    position: 'relative',
    top: '14%',
    right: '0',
    bottom: '0',
    left: '14%',
    animation: 'x 0.75s infinite',
    animationName: rotateForeverAnimation,
    animationTimingFunction: 'linear',
    height: '30px',
    width: '30px',
    borderLeft: '8px solid #ffffff',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid #ffffff',
    borderTop: '8px solid #ffffff',
    borderRadius: '50%',
    display: 'inline-block'
  }
};

@Radium
export default class SimpleSpinnerLoader extends Component {

  static propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string
  };

  static defaultProps = {
    color: '#666',
    backgroundColor: '#FFF'
  };

  render() {
    const propsStyle = {
      background: this.props.backgroundColor,
      borderLeft: `8px solid ${this.props.color}`,
      borderRight: '8px solid transparent',
      borderBottom: `8px solid ${this.props.color}`,
      borderTop: `8px solid ${this.props.color}`,
    };
    return (
      <div style={[style.container, { backgroundColor: this.props.backgroundColor }]}>
        <div className="spinner" style={[style.loader, propsStyle]}>
        </div>
      </div>
    );
  }
}
