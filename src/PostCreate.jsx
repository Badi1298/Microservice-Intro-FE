import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
	const [title, setTitle] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios.post('http://localhost:4000/posts', {
			title,
		});

		setTitle('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						value={title}
						type="text"
						id="title"
						className="form-control"
						style={{ marginBottom: '10px' }}
						onChange={(e) => setTitle(e.target.value)}
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
