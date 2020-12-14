import React, { useState } from 'react';
import './App.css';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

interface Todo {
	text: string;
	complete: boolean;
}

type addTodo = (text: string) => void;
type toggleTodo = (selectedTodo: Todo) => void;
type removeTodo = () => void;

function App() {
	const [ todos, setTodos ] = useState<Todo[]>([]);
	const toggleTodo: toggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: addTodo = (text: string) => {
		const newTodo = { text, complete: false };
		return setTodos([ ...todos, newTodo ]);
	};

	const removeTodo: removeTodo = () => {
		todos.splice(0, 1);
		setTodos([ ...todos ]);
	};

	return (
		<div className="App">
			<TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
			<AddTodoForm addTodo={addTodo} />
		</div>
	);
}

export default App;
