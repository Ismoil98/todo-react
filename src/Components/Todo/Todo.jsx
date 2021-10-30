import React from 'react';
import './Todo.scss';

function Todo({ children, id, isCompleted, handleDelete }) {
	return (
		<li>
			<span className="input">{children}</span>

			<input className="checkbox" type="checkbox" id={isCompleted}></input>

			<button className="btn-todo" data-todo-id={id} onClick={handleDelete}>
				delete
			</button>

		</li>
	);
}

export default Todo;
