import React from 'react';
import {
	loadJSON,
	getConfig
} from '../lib/util';
import Loading from '../components/loading';
import Pagination from '../components/pagination';
import Head from '../components/head';
import List from '../partial/list';

export default class TagRoute extends React.Component {
	constructor() {
		super();
		this.state = {
      url: '',
      data: {}
    };
	}
  getCurrentDataUrl() {
    let tag = this.props.params.tag;
    let page = this.props.query.page || 0;
    return './async/tags/' + tag + (page > 1 ? '-' + page : '') + '.json';
  }
	fetchData() {
    loadJSON(this.getCurrentDataUrl())
      .then((data) => {
				if(data.url === this.getCurrentDataUrl())
          this.setState(data);
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
	render() {
    let content;
    let tag = this.props.params.tag;
    let url = this.getCurrentDataUrl();
    if(this.state.url === url) {
      let data = this.state.data;
      content = (
        <div className="list">
					<Head height={100} title={'标签：' + tag} back={getConfig('theme/cover')}></Head>
          <List key={url} list={data}></List>
          <Pagination base={'tag'} params={{ tag: tag }} cur={data._page} total={data._totalPage}></Pagination>
        </div>
      );
    } else {
      content = (<Loading/>);
      this.fetchData();
    }
    return (
      <div className="rt-tag">
        {content}
      </div>
    );
	}
}
