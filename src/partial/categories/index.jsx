import React from 'react';

import './index.less';

import {
	loadJSON
} from '../../lib/util';

import Category from '../../components/category';
import Loading from '../../components/loading';


export default class Categories extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	fetchData() {
    loadJSON('./async/categories.json')
      .then((data) => {
      	this.setState({
      		categories: data.data
      	});
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
	render() {
		if(this.state.categories)
			return (
				<div className="pt-categories">
					<h2 className="cat-title">分类<e></e></h2>
					<ul className="cat-list">
						{this.state.categories.sort((a, b) => {
							if(b.count !== a.count) return b.count - a.count;
							else return b.name > a.name ? 1 : -1;
						}).map((cat) => {
							return (<li className="cat-item"><Category category={cat}></Category></li>);
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
