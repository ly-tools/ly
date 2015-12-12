import React from 'react';

import '../../lib/yue/yue.css';
import './index.less';

export default class Content extends React.Component {
	static propTypes = {
		html: React.PropTypes.string
	}
	static defaultProps = {
		html: ''
	}
	constructor() {
		super();
	}
	render() {
		return (
			<div className="cp-content yue" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
		);
	}
}
