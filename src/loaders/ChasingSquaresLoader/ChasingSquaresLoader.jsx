import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import style from './ChasingSquaresLoader.less';

@CSSModules(style)
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
      <div styleName="container">
        <div styleName="square" style={propsStyle}/>
        <div styleName="square2" style={propsStyle}/>
        <div styleName="square3" style={propsStyle}/>
        <div styleName="square4" style={propsStyle}/>
      </div>
    );
  }
}
