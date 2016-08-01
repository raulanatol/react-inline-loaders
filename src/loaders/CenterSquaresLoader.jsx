import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const moveInAnimation = Radium.keyframes({
  '33%': { transform: 'translate(0, 0)', opacity: '0.7' },
  '66%': { transform: 'translate(0, 0)', opacity: '0.7' }
}, 'moveItAnimation');

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
    opacity: '0.2',
    background: '#666',
    margin: '3px',
    animation: 'x 2s infinite',
    animationName: moveInAnimation
  },
  square1: {
    opacity: '0.5',
    transform: 'translate(0, -25px)'
  },
  square2: {
    opacity: '0.5',
    transform: 'translate(25px, 0)'
  },
  square3: {
    opacity: '0.5',
    transform: 'translate(-25px, 0)'
  },
  square4: {
    opacity: '0.5',
    transform: 'translate(0, 25px)'
  }
};

@Radium
export default class CenterSquaresLoader extends Component {

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
