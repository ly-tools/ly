import React from 'react';

import './index.less';

export default class ToTop extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    show: React.PropTypes.bool
	}
	static defaultProps = {
    onClick: () => {},
    show: false
	}
  constructor() {
    super();
  }
  render() {
    return (
      <div className={'cp-totop' + (this.props.show ? '' : ' hide')} onClick={this.props.onClick}>
        <span className="icon-totop"></span>
      </div>
    );
  }
}
