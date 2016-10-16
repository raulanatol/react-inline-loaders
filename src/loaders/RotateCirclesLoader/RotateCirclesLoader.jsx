import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import style from './RotateCirclesLoader.less';

@CSSModules(style)
export default class RotateCirclesLoader extends Component {

  static propTypes = {
    color1: PropTypes.string,
    color2: PropTypes.string
  };

  static defaultProps = {
    color1: '#666',
    color2: '#066',
  };

  render() {
    const { color1, color2 } = this.props;
    return (
      <div styleName="loader">
        <div styleName="circle1" style={{ backgroundColor: color1 }}/>
        <div styleName="circle2" style={{ backgroundColor: color2 }}/>
      </div>
    );
  }
}
