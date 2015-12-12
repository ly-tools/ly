import React from 'react';

import {
  getConfig
} from '../../lib/util';

import './index.less';

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-footer">
        Copyrights © {new Date().getFullYear()} {getConfig('global/author')}. All Rights Reserved.
      </div>
    );
  }
}
