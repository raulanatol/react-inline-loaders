import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const dotlineAnimation = Radium.keyframes({
  '40%': { transform: 'translateX(0px)', opacity: 0.8 },
  '100%': { transform: 'translateX(300px)', opacity: 0 }
}, 'dotlineAnimation');

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
  dot: {
    display: 'inline-block',
    background: '#666',
    height: '5px',
    width: '5px',
    opacity: '0',
    borderRadius: '50%',
    animation: 'x 4s infinite',
    animationName: dotlineAnimation,
    transform: 'translateX(-300px)',
    margin: '0 2px 0 2px'
  },
  dot1: { animationDelay: '.8s' },
  dot2: { animationDelay: '.7s' },
  dot3: { animationDelay: '.6s' },
  dot4: { animationDelay: '.5s' },
  dot5: { animationDelay: '.4s' },
  dot6: { animationDelay: '.3s' },
  dot7: { animationDelay: '.2s' },
  dot8: { animationDelay: '.1s' }
};

@Radium
export default class DotLineLoader extends Component {

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
      <div style={style.loader}>
        <div style={style.dotline}>
          <div className="dot" style={[style.dot, propsStyle, style.dot1]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot2]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot3]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot4]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot5]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot6]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot7]}/>
          <div className="dot" style={[style.dot, propsStyle, style.dot8]}/>
        </div>
      </div>
    );
  }
}
