import React from 'react';

import './index.less';

import {
	loadJSON
} from '../../lib/util';

import Tag from '../../components/tag';
import Loading from '../../components/loading';

export default class Tags extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	fetchData() {
    loadJSON('./async/tags.json')
      .then((data) => {
      	this.setState({
      		tags: data.data
      	});
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
	render() {
		if(this.state.tags)
			return (
				<div className="pt-tags">
					<h2 className="tag-title">标签<e className="icon-tag"></e></h2>
					<ul className="tag-list">
						{this.state.tags.sort((a, b) => {
							if(b.count !== a.count) return b.count - a.count;
							else return b.name > a.name ? 1 : -1;
						}).map((tag) => {
							return (<li className="tag-item"><Tag tag={tag}></Tag></li>);
						})}
					</ul>
				</div>

			);
		else {
			this.fetchData();
			return (<Loading></Loading>);
		}
	}
}
