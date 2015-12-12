import React from 'react';

import './index.less';

import BlurImage from '../blur';

export default class Head extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    back: React.PropTypes.string,
    height: React.PropTypes.number
  }
  constructor() {
    super();
  }
  render() {
    let children = [];
    let {
      title,
      subtitle,
      back,
      height
    } = this.props;
    back && children.push(
      <div className="head-back" style={{
          height: height || window.innerHeight
        }}>
        <BlurImage src={back} radius={10} blurAlphaChannel={false}></BlurImage>
      </div>
    );
    if(subtitle || title) {
      let titles = [];
      title && titles.push(<h1 className="head-title">{title}</h1>);
      subtitle && titles.push(<h1 className="head-subtitle">{subtitle}</h1>);
      children.push(
        <div className="head-titles">
          {titles}
        </div>
      );
    }
    return (
      <div className="cp-head">
        {children}
      </div>
    );
  }
}
