import React from 'react';

import {
	loadJSON,
  pad
} from '../lib/util';

import Loading from '../components/loading';
import Post from '../partial/post';

export default class PostRoute extends React.Component {
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
      month,
      day,
      name
    } = this.props.params;
    let path = [parseInt(year), parseInt(month), parseInt(day), name].map((item) => typeof item === 'number' ? pad(item, 2) : item).join('/');
    return './async/posts/' + path + '.json';
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
    if(this.state.url === url)
      content = (<Post key={url} post={this.state.data}></Post>);
    else {
      content = (<Loading/>);
      this.fetchData();
    }
    return (
      <div className="rt-post">
        {content}
      </div>
    );
  }
}
