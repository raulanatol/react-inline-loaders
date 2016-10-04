import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import style from './DotWaveLoader.less';

@CSSModules(style)
export default class DotWaveLoader extends Component {

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
        <div styleName="loaderDots">
          <div styleName="dot" style={propsStyle}/>
          <div styleName="dot2" style={propsStyle}/>
          <div styleName="dot3" style={propsStyle}/>
          <div styleName="dot4" style={propsStyle}/>
          <div styleName="dot5" style={propsStyle}/>
        </div>
      </div>
    );
  }
}
