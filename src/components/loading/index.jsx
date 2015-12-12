import React from 'react';

import './index.less';

export default class Loading extends React.Component{
	constructor() {
		super();
	}
	render() {
		return (
			<div className="cp-loading">
				<div className="wrapper">
				  <p>加载中...</p>
				  <div className="perp" id="p1"></div>
				  <div className="perp" id="p2"></div>
				  <div className="perp" id="p3"></div>
				</div>
			</div>
		);
	}
}
