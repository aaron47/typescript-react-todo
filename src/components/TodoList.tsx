import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Todo {
	text: string;
	complete: boolean;
}

type toggleTodo = (selectedTodo: Todo) => void;
type removeTodo = () => void;

interface Props {
	todos: Todo[];
	toggleTodo: toggleTodo;
	removeTodo: removeTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
			))}
		</ul>
	);
};
