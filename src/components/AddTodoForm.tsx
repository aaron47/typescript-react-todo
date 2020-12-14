import React, { useState } from 'react';

type addTodo = (text: string) => void;

interface Props {
	addTodo: addTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
	const [ text, setText ] = useState('');

	return (
		<form>
			<input
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					setText('');
					addTodo(text);
				}}
				type="submit"
			>
				Add Todo
			</button>
		</form>
	);
};
