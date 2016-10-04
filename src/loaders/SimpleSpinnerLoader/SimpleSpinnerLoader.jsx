import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import style from './SimpleSpinnerLoader.less';

@CSSModules(style)
export default class SimpleSpinnerLoader extends Component {

  static propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string
  };

  static defaultProps = {
    color: '#666',
    backgroundColor: 'transparent'
  };

  render() {
    // style.container.
    const propsStyle = {
      background: this.props.backgroundColor,
      borderLeftColor: this.props.color,
      borderBottomColor: this.props.color,
      borderTopColor: this.props.color
    };
    return (
      <div styleName="container" style={{ backgroundColor: this.props.backgroundColor }}>
        <div styleName="spinner" style={propsStyle}/>
      </div>
    );
  }
}
