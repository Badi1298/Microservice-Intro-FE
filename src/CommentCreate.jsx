import { useState } from 'react';
import axios from 'axios';

export default function CommentCreate({ postId }) {
	const [comment, setComment] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content: comment,
		});

		setComment('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="comment">New Comment</label>
					<input
						value={comment}
						type="text"
						id="comment"
						className="form-control"
						style={{ marginBottom: '10px' }}
						onChange={(e) => setComment(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
