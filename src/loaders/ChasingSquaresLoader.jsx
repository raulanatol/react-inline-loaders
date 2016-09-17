import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const focusFade = Radium.keyframes({
  '0%': { opacity: '0.5' },
  '30%': { opacity: '0.5' },
  '60%': { opacity: '0' },
  '75%': { opacity: '0' },
  '100%': { opacity: '0.5' }
}, 'focusFade');

const style = {
  container: {
    width: '50px',
    lineHeight: '10px',
    height: '50px'
  },
  square: {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    opacity: '1',
    background: '#666',
    margin: '3px',
    animation: 'x 2.8s infinite',
    animationName: focusFade
  },
  square1: {},
  square2: {
    animationDelay: '.7s'
  },
  square3: {
    animationDelay: '2.1s'
  },
  square4: {
    animationDelay: '1.4s'
  }
};

@Radium
export default class ChasingSquaresLoader extends Component {

  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#666'
  };

  render() {
    const propsStyle = {
      background: this.props.color
    };
    return (
      <div style={style.container}>
        <div className="square" style={[style.square, propsStyle, style.square1]}/>
        <div className="square" style={[style.square, propsStyle, style.square2]}/>
        <div className="square" style={[style.square, propsStyle, style.square3]}/>
        <div className="square" style={[style.square, propsStyle, style.square4]}/>
      </div>
    );
  }
}
