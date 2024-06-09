export default function PostList({ comments }) {
	return (
		<ul>
			{comments.map((comment) => (
				<li key={comment.id}>
					{comment.status === 'pending' ? 'Awaiting moderation' : comment.status === 'approved' ? comment.content : 'Comment rejected'}
				</li>
			))}
		</ul>
	);
}
