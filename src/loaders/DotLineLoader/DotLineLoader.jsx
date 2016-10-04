import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import style from './DotLineLoader.less';

@CSSModules(style)
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
      <div styleName="loader">
        <div styleName="dot1" style={propsStyle}/>
        <div styleName="dot2" style={propsStyle}/>
        <div styleName="dot3" style={propsStyle}/>
        <div styleName="dot4" style={propsStyle}/>
        <div styleName="dot5" style={propsStyle}/>
        <div styleName="dot6" style={propsStyle}/>
        <div styleName="dot7" style={propsStyle}/>
        <div styleName="dot8" style={propsStyle}/>
      </div>
    );
  }
}
