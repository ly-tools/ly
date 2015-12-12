import React from 'react';
import {
	Link
} from 'react-router';

import './index.less';

export default class Pagination extends React.Component {
	static propTypes = {
		base: React.PropTypes.string,
		cur: React.PropTypes.number,
		total: React.PropTypes.number
	}
	constructor() {
		super();
	}
	render() {
		let children = [];
		let {
			base,
			total,
			cur
		} = this.props;
		let params = this.props.params;

		if(cur !== 1)
			children.push(
				<div className="prev">
					<e></e>
					<Link to={base} params={params} query={{page: cur - 1}}>上一页</Link>
				</div>
			);
		if(cur !== total)
			children.push(
				<div className="next">
					<Link to={base} params={params} query={{page: cur + 1}}>下一页</Link>
					<e></e>
				</div>
			);
		return (
			<div className="cp-pagination">
				{children}
			</div>
		);
	}
}
