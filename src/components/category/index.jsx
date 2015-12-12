import React from 'react';

import {
	Link
} from 'react-router';

export default class Category extends React.Component {
	static propTypes = {
		category: React.PropTypes.object,
		showCount: React.PropTypes.bool
	}
	static defaultProps = {
		category: {},
		showCount: true
	}
	constructor() {
		super();
	}
	render() {
		let category = this.props.category;
		let children = [(<span className="name">{category.name}</span>)];
		if(category.count && this.props.showCount)
			children.push(<span className="count">{category.count}</span>);
		return (
			<span className="cp-category">
				<Link to="category" params={{ category: category.name }}>
					{children}
				</Link>
			</span>
		);
	}
}
