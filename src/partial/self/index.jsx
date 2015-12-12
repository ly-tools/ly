import React from 'react';

import {
  getConfig
} from '../../lib/util';

import './index.less';

export default class Self extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-self">
        <img className="avatar" src={getConfig('theme/avatar')}></img>
        <div className="name">{getConfig('global/author')}</div>
      </div>
    );
  }
}
