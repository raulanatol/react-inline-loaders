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
      borderLeft: `8px solid ${this.props.color}`,
      borderRight: '8px solid transparent',
      borderBottom: `8px solid ${this.props.color}`,
      borderTop: `8px solid ${this.props.color}`,
    };
    console.log(JSON.stringify(style));
    return (
      <div styleName="container" style={{ backgroundColor: this.props.backgroundColor }}>
        <div styleName="spinner" style={propsStyle}/>
      </div>
    );
  }
}
