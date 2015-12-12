import React from 'react';

import './index.less';

import {
  getConfig
} from '../../lib/util';

export default class Friends extends React.Component {
	constructor() {
		super();
	}
	render() {
		var friends = getConfig('theme/friends');
    return friends ? (
      <div className="pt-friends">
        <h2 className="friends-title">好友<e></e></h2>
        <ul className="friends-list">
          {
            friends.map((friend) => {
              return (
                <li className="friends-item">
                  <a title={friend.name} href={friend.url}>{friend.name}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    ) : ('');
	}
}
