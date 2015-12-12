import React from 'react';
import {
	Link
} from 'react-router';

import './index.less';

import Content from '../../components/content';
import Category from '../../components/category';

export default class Summary extends React.Component {
	static propTypes = {
		post: React.PropTypes.object
	}
	constructor() {
		super();
	}
	render() {
		let post = this.props.post;
		let info = `${post.path.year}年${post.path.month}月${post.path.day}日 发表于 `;
		return (
			<div className="pt-summary">
					<div className="summary">
						<Link to='post' params={post.path}>
							<h2 className="title">{post.title}</h2>
						</Link>
						<Content html={post.content}></Content>
						<div className="footer">
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
							<Link to='post' params={post.path}>
								<span className="read-more">阅读更多</span>
							</Link>
						</div>
					</div>
			</div>

		);
	}
}
