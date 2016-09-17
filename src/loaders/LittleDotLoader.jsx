import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const pulseAnimation = Radium.keyframes({
  '30%': { transform: 'scale(0.7)', opacity: '0.8' },
  '50%': { transform: 'scale(1.1)', opacity: '1.0' },
  '70%': { transform: 'scale(0.8)', opacity: '0.8' }
}, 'pulseAnimation');

const pulseRadiusAnimation = Radium.keyframes({
  '30%': { transform: 'scale(0.7)', opacity: '1' },
  '40%': { transform: 'scale(7.8)', opacity: '0.1' },
  '80%': { transform: 'scale(4.8)', opacity: '0' },
  '100%': { transform: 'scale(1)', opacity: '0' }
}, 'pulseRadiusAnimation');

const style = {
  loader: {
    display: 'flex',
    position: 'relative'
  },
  loaderPulse: {},
  pulseCenter: {
    background: '#666',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    animation: '1.5s infinite',
    animationName: pulseAnimation,
    position: 'absolute',
    opacity: '0.8',
    zIndex: '5'
  },
  pulseExplosion: {
    content: '',
    width: '15px',
    height: '15px',
    background: '#ccc',
    borderRadius: '50%',
    position: 'absolute',
    animation: '1.5s infinite',
    animationName: pulseRadiusAnimation,
    zIndex: 1
  }
};

@Radium
export default class LittleDotLoader extends Component {

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
        <div style={style.loaderPulse}>
          <div className="pulse" style={[style.pulseCenter, propsStyle]}/>
          <div className="explosion" style={[style.pulseExplosion, propsStyle]}/>
        </div>
      </div>
    );
  }
}
