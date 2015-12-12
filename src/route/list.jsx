import React from 'react';

import {
	loadJSON,
	getConfig
} from '../lib/util';

import Loading from '../components/loading';
import Pagination from '../components/pagination';
import Head from '../components/head';
import List from '../partial/list';

export default class ListRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      data: {}
    };
  }
  getCurrentDataUrl() {
    let page = this.props.query.page || 0;
    return './async/lists/list' + (page > 1 ? '-' + page : '') + '.json';
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
    let url = this.getCurrentDataUrl();
    if(this.state.url === url) {
      let data = this.state.data;
			let head = data._page === 1 ?
				(<Head title={getConfig('global/title')} subtitle={getConfig('global/subtitle')} back={getConfig('theme/cover')}></Head>) :
				(<Head height={100} title={getConfig('global/title')} back={getConfig('theme/cover')}></Head>);
      content = (
        <div className="list">
					{head}
          <List key={url} list={data}></List>
          <Pagination base="list" cur={data._page} total={data._totalPage}></Pagination>
        </div>
      );
    } else {
      content = (<Loading/>);
      this.fetchData();
    }

    return (
      <div className="rt-list">
        {content}
      </div>
    );
  }
}
