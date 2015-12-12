import React from 'react';

import './index.less';

import {
  getConfig
} from '../../lib/util';

export default class Social extends React.Component {
  constructor() {
    super();
  }
  render() {
    var social = getConfig('theme/social');
    return social ? (
      <ul className="pt-social">
        {
          social.map((item) => {
            return (
              <li className="social-item">
                <a href={item.type === 'email' ? 'mailto:' + item.url : item.url} className={item.type}></a>
              </li>
            );
          })
        }
      </ul>
    ) : ('');
  }
}
