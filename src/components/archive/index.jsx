import React from 'react';

import {
	Link
} from 'react-router';

export default class Archive extends React.Component {
	static propTypes = {
		archive: React.PropTypes.object
	}
	static defaultProps = {
		archive: {}
	}
	constructor() {
		super();
	}
	render() {
		let archive = this.props.archive;
		let children = [(<span className="name">{archive.year + '年' + archive.month + '月'}</span>)];
		if(archive.count)
			children.push(<span className="count">{archive.count}</span>);
		return (
			<span className="cp-archive">
				<Link to="archive" params={{
					year: archive.year,
					month: archive.month
				}}>
					{children}
				</Link>
			</span>
		);
	}
}
