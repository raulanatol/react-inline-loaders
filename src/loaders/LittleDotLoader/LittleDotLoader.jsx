import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import style from './LittleDotLoader.less';

@CSSModules(style)
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
      <div styleName="loader">
        <div>
          <div styleName="pulse" style={propsStyle}/>
          <div styleName="explosion" style={propsStyle}/>
        </div>
      </div>
    );
  }
}
