import React from 'react';

import './index.less';

import Content from '../../components/content';
import Duoshuo from '../../components/duoshuo';
import Head from '../../components/Head';
import Category from '../../components/category';
import Tag from '../../components/tag';

import {
	pad,
	getConfig
} from '../../lib/util';

export default class Post extends React.Component {
	static propTypes = {
		post: React.PropTypes.object
	}
	static defaultProps = {
		post: {}
	}
	constructor() {
		super();
	}
	render() {
		let post = this.props.post;
		let {
			year,
			month,
			day,
			name
		} = post.path;
		let info = `${post.path.year}年${post.path.month}月${post.path.day}日 发表于 `;
		let thread = '/blog/' + [year, month, day].map((v) => pad(v, 2)).join('/') + '/' + name + '/';
		return (
			<div className="pt-post">
				<div className="post-head">
					<Head title={post.title} subtitle={post.subtitle} back={post.cover || getConfig('theme/cover')}></Head>
				</div>
				<div className="post-main">
					<div className="post-info">
						<span className="info">
							{info}
							{
								post.categories.map((cat, index) => {
									return (
										<span>
											{index !== 0 ? ',' : ''}
											<Category category={cat} showCount={false}/>
										</span>
									);
								})
							}
						</span>
						<span className="tags">
							标签：
							{
								post.tags.map((tag, index) => {
									return (
										<span>
											{index !== 0 ? ',' : ''}
											<Tag tag={tag} showCount={false}/>
										</span>
									);
								})
							}
						</span>
					</div>
					<div className="post-content">
							<Content html={post.content}></Content>
					</div>
					<div className="post-comment">
						{
							(getConfig('theme/duoshuo') ? (<Duoshuo shortName={getConfig('theme/duoshuo')} url={post.permalink} thread={thread}></Duoshuo>) : '')
						}
					</div>
				</div>
			</div>
		);
	}
}
