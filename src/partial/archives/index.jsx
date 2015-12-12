import React from 'react';

import './index.less';

import {
	loadJSON
} from '../../lib/util';

import Archive from '../../components/archive';
import Loading from '../../components/loading';


export default class Archives extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	fetchData() {
  	loadJSON('./async/archives.json')
      .then((data) => {
      	this.setState({
      		archives: data.data
      	});
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
	render() {
		if(this.state.archives) {
			return (
				<div className="pt-archives">
					<h2 className="arc-title">归档<e className="icon-archive"></e></h2>
					<ul className="arc-list">
						{this.state.archives.sort((a, b) => {
							if(a.year !== b.year) return b.year - a.year;
							else if(a.month !== b.month) return b.month - a.month;
							else return b.name > a.name ? 1 : -1;
						}).map((archive) => {
							return (<li className="arc-item"><Archive archive={archive}></Archive></li>);
						})}
					</ul>
				</div>
			);
		} else {
			this.fetchData();
			return (<Loading></Loading>);
		}
	}
}
