import { handleCompletedParams, TodoCompleted, type ListOfTodos, type TodoId } from "../types";
import { Todo } from "./Todo";



interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleComplited: ({ id, completed }: handleCompletedParams) => void
}


export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleComplited }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => {
                return (
                    <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
                        <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} onToggleComplited={onToggleComplited} />
                    </li>
                )
            })}
        </ul>
    )
};