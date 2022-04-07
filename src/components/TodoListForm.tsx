import { useState } from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "../todo.model";

const TodoListForm = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const handleAddTodo = (
    todo: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    todos.push(new Todo(todo, false));
    setTodos([...todos]);
    setText("");
  };

  const removeTodo = (
    selectedId: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    todos.splice(selectedId, 1);
    setTodos([...todos]);
  };

  const toggleTodo = (todo: Todo, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newTodos = todos.map((selectedTodo: Todo) => {
      if (todo === selectedTodo) {
        return (todo.completed = !todo.completed);
      }
      return todos;
    });
    setTodos([...todos]);
  };

  return (
    <form>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        onClick={(e) => {
          if (text === "") {
            e.preventDefault();
            return;
          }
          handleAddTodo(text, e);
        }}
      >
        Add Todo
      </button>
      <TodoListItem
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        todos={todos}
      />
    </form>
  );
};

export default TodoListForm;
