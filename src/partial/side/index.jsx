import React from 'react';
import Tags from '../tags';
import Categories from '../categories';
import Archives from '../archives';
import Self from '../self';
import Friends from '../friends';
import Social from '../Social';

import {
	getConfig
} from '../../lib/util';

import './index.less';

var sectionMapping = {
	tags: Tags,
	categories: Categories,
	archives: Archives,
	self: Self,
	friends: Friends,
	social: Social
};

export default class Side extends React.Component {
	constructor() {
		super();
	}
	render() {
		var sections = getConfig('theme/widgets');
		return (
			<div className="pt-side">
				{
					sections.map((name) => {
						var Section = sectionMapping[name];
						return (<Section/>);
					})
				}
			</div>
		);
	}
}
