import React from 'react';

import {
	loadJSON,
	getConfig
} from '../lib/util';

import Loading from '../components/loading';
import Pagination from '../components/pagination';
import Head from '../components/head';
import List from '../partial/list';

export default class ArchiveRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      data: {}
    };
  }
  getCurrentDataUrl() {
    let {
      year,
      month
    } = this.props.params;
    let page = this.props.query.page || 0;
    return './async/archives/' + year + '/' + month + '/list' + (page > 1 ? '-' + page : '') + '.json';
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
    let {
      year,
      month
    } = this.props.params;
    let url = this.getCurrentDataUrl();

    if(this.state.url === url) {
      let data = this.state.data;
      content = (
        <div className="list">
          <List key={url} list={data}></List>
          <Pagination base={'archive'} params={{
              year: year,
              month: month
            }} cur={data._page} total={data._totalPage}></Pagination>
          </div>
      );
    } else {
      content = (<Loading/>);
      this.fetchData();
    }
    return (
      <div className="rt-archive">
				<Head height={100} title={'归档：' + year + '年' + month + '月'} back={getConfig('theme/cover')}></Head>
        {content}
      </div>
    );
  }
}
