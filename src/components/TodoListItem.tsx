import React from 'react';

interface Todo {
	text: string;
	complete: boolean;
}

type toggleTodo = (selectedTodo: Todo) => void;
type removeTodo = () => void;

interface Props {
	todo: Todo;
	toggleTodo: toggleTodo;
	removeTodo: removeTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
	return (
		<li>
			<label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
				<input type="checkbox" checked={todo.complete} onClick={() => toggleTodo(todo)} /> {todo.text}
			</label>
			<button
				onClick={(e) => {
					e.preventDefault();
					removeTodo();
				}}
			>
				Remove Todo
			</button>
		</li>
	);
};
