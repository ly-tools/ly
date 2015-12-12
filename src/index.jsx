import React from 'react';
import Router from 'react-router';
var {
  Route,
  DefaultRoute,
  RouteHandler,
  Link
} = Router;

import {
  ListRoute,
  PostRoute,
  TagRoute,
  CategoryRoute,
  ArchiveRoute
} from './route';

import {
  loadJSON,
  setConfig
} from './lib/util';

import './index.less';

import Side from './partial/side';
import Footer from './partial/footer';
import ToTop from './components/totop';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      showSide: false,
      showToTop: false
    };
  }
  calRotateDeg() {
    var width = document.body.clientWidth;
    return Math.acos((width - 300) / width) / (2 * Math.PI) * 360;
  }
  showSide(e) {
    this.setState({
      showSide: true
    });
    e.stopPropagation();
    e.preventDefault();
  }
  hideSide(e) {
    this.setState({
      showSide: false
    });
    e.stopPropagation();
    e.preventDefault();
  }
  scrollToTop() {
    React.findDOMNode(this).querySelector('.main').scrollTop = 0;
  }
  componentDidMount() {
    var mainNode = React.findDOMNode(this).querySelector('.main');
    mainNode.addEventListener('scroll', () => {
      let showToTop = this.state.showToTop;
      if (mainNode.scrollTop === 0)
        showToTop && this.setState({
          showToTop: false
        });
      else
        !showToTop && this.setState({
          showToTop: true
        });
    });
  }
  render() {
    var deg = this.calRotateDeg.call(this);
    var sideStyle = {};
    var mainStyle = {};
    [
      'WebkitTransform', 'transform', 'MozTransform', 'MsTransform', 'oTransform'
    ].forEach((name) => {
      sideStyle[name] = 'translateX(-300px) rotateY(' + (this.state.showSide ? 0 : deg) + 'deg)';
      mainStyle[name] = 'rotateY(' + (this.state.showSide ? deg : 0) + 'deg)';
    });
    return (
      <div className={'blog' + (this.state.showSide ? ' onside' : '')}>
        <div className="mask" onClick={this.hideSide.bind(this)}/>
        <div className="side" style={sideStyle}>
          <Side/>
        </div>
        <div className="main" style={mainStyle}>
          <RouteHandler/>
          <Footer/>
        </div>
        <a href="#" className="toside" onClick={this.showSide.bind(this)}/>
        <Link to="/">
          <span className="tohome"/>
        </Link>
        <ToTop onClick={this.scrollToTop.bind(this)} show={this.state.showToTop}/>
      </div>
    );
  }
}
var routes = (
  <Route handler={Blog}>
    <DefaultRoute handler={ListRoute}/>
    <Route handler={ListRoute} name="list" path="list"/>
    <Route handler={PostRoute} name="post" path="post/:year/:month/:day/:name"/>
    <Route handler={TagRoute} name="tag" path="tag/:tag"/>
    <Route handler={CategoryRoute} name="category" path="category/:category"/>
    <Route handler={ArchiveRoute} name="archive" path="archive/:year/:month"/>
  </Route>
);

loadJSON('./async/config.json').then((config) => {
  setConfig(config.data);
  Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.body);
  });
});
