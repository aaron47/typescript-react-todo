import { Todo } from "../todo.model";
interface Props {
  todos: Todo[];
  removeTodo: (
    selectedId: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  toggleTodo: (todo: Todo, e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoListItem: React.FC<Props> = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo: Todo, index: number) => {
        return (
          <div className="container">
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              key={index}
            >
              {todo.data}
            </li>
            <button onClick={(e) => removeTodo(index, e)}>Delete</button>
            <button onClick={(e) => toggleTodo(todo, e)}>✓</button>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoListItem;
