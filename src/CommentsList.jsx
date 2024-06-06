export default function PostList({ comments }) {
	return (
		<ul>
			{comments.map((comment) => (
				<li key={comment.id}>{comment.content}</li>
			))}
		</ul>
	);
}
