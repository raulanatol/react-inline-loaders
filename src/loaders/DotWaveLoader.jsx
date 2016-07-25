import Radium from 'radium';
import React, { Component } from 'react';

const moveItAnimation = Radium.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '35%': { transform: 'translateY(0px)', opacity: '0.3' },
  '50%': { transform: 'translateY(-20px)', opacity: '0.8' },
  '70%': { transform: 'translateY(3px)', opacity: '0.8' },
  '85%': { transform: 'translateY(-3px)' }
}, 'moveItAnimation');

const style = {
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '45%',
    margin: '5%',
    position: 'relative'
  },
  loaderDots: {
    height: '50px',
    width: '80px'
  },
  dot: {
    display: 'inline-block',
    background: '#666',
    height: '8px',
    width: '8px',
    opacity: '0.3',
    borderRadius: '50%',
    animation: 'x 1.8s infinite',
    animationName: moveItAnimation
  },
  dot2: {
    animationDelay: '.15s'
  },
  dot3: {
    animationDelay: '.3s'
  },
  dot4: {
    animationDelay: '.45s'
  },
  dot5: {
    animationDelay: '.6s'
  }
};

@Radium
export default class DotWaveLoader extends Component {

  render() {
    return (
      <div style={style.loader}>
        <div style={style.loaderDots}>
          <div style={style.dot}/>
          <div style={[style.dot, style.dot2]}/>
          <div style={[style.dot, style.dot3]}/>
          <div style={[style.dot, style.dot4]}/>
          <div style={[style.dot, style.dot5]}/>
        </div>
      </div>
    );
  }
}
