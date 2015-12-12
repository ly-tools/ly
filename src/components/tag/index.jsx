import React from 'react';

import {
	Link
} from 'react-router';

export default class Tag extends React.Component {
	static propTypes = {
		tag: React.PropTypes.object,
		showCount: React.PropTypes.bool
	}
	static defaultProps = {
		tag: {},
		shoCount: true
	}
	constructor() {
		super();
	}
	render() {
		let tag = this.props.tag;
		let children = [(<span className="name">{tag.name}</span>)];
		if(tag.count && this.props.showCount)
			children.push(<span className="count">{tag.count}</span>);
		return (
			<span class="cp-tag">
				<Link to="tag" params={{ tag: tag.name }}>
					{children}
				</Link>
			</span>
		);
	}
}
