import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CommentsList from './CommentsList';
import CommentCreate from './CommentCreate';

export default function PostList() {
	const [posts, setPosts] = useState({});

	const fetchPosts = async () => {
		const res = await axios.get('http://localhost:4002/posts');

		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const renderedPosts = Object.values(posts);

	return (
		<div className="d-flex flex-row flex-wrap justify-content-between">
			{renderedPosts.map((post) => (
				<div
					key={post.id}
					className="card"
					style={{ width: '30%', marginBottom: '20px' }}
				>
					<div className="card-body">
						<h3>{post.title}</h3>
						<CommentsList comments={post.comments} />
						<CommentCreate postId={post.id} />
					</div>
				</div>
			))}
		</div>
	);
}
