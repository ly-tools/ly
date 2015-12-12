import React from 'react';

import {
	loadJSON,
	getConfig
} from '../lib/util';

import Loading from '../components/loading';
import Pagination from '../components/pagination';
import Head from '../components/head';
import List from '../partial/list';

export default class CategoryRoute extends React.Component {
	constructor() {
		super();
		this.state = {
      url: '',
      data: {}
    };
	}
  getCurrentDataUrl() {
    let page = this.props.query.page || 0;
    let category = this.props.params.category;
    return './async/categories/' + category + (page > 1 ? '-' + page : '') + '.json';
  }
	fetchData() {
    loadJSON(this.getCurrentDataUrl())
      .then((data) => {
        if(data.url === this.getCurrentDataUrl())
          this.setState(data);
      })
      .catch(function(error) {
        console.error(error.message);
      });
  }
  render() {
    let content;
    let category = this.props.params.category;
    let url = this.getCurrentDataUrl();
    if(this.state.url === url) {
      let data = this.state.data;
      content = (
        <div className="list">
					<Head height={100} title={'分类：' + category} back={getConfig('theme/cover')}></Head>
          <List key={url} list={data}></List>
          <Pagination base={'category'} params={{ category: category }} cur={data._page} total={data._totalPage}></Pagination>
        </div>
      );
    } else {
      content = (<Loading/>);
      this.fetchData();
    }
    return (
      <div className="rt-category">
        {content}
      </div>
    );
	}
}
