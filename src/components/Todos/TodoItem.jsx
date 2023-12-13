import styles from './TodoItems.module.css'

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
    return (
        <li className={styles.todo__item}>
            <div className={styles.todo__main}>
                <input type="checkbox" 
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
    )
}

export default TodoItem