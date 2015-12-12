import React from 'react';

import $ from 'expose?jQuery!../../lib/jquery';

import {
  loadScript
} from '../../lib/util';

export default class Duoshuo extends React.Component{
  static propTypes = {
    thread: React.PropTypes.string,
    shortName: React.PropTypes.string,
    url: React.PropTypes.string
  }
  static defaultProps = {
    shortName: '',
    thread: '',
    url: ''
  }
  constructor() {
    super();
    this.state = {};
  }
  fresh() {
    require(['!../../lib/duoshuo'], () => {
      let {
        thread: thread,
        url: url
      } = this.props;
      url = url || window.location;
      let container = React.findDOMNode(this);
      let el = document.createElement('div');
      el.setAttribute('data-thread-key', thread);
      el.setAttribute('data-url', url);
      container.innerHTML = '';
      container.appendChild(el);
      DUOSHUO.EmbedThread(el);
    });
  }
  componentDidMount() {
    window.duoshuoQuery = {
      short_name: this.props.shortName
    };
    this.fresh();
  }
  componentDidUpdate() {
    this.fresh();
  }
  render() {
    return (
      <div className="cp-duoshuo"></div>
    );
  }
}
