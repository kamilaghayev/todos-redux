import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoComplete, removeTodo } from '../../store/todoSlice';
import styles from './TodoItems.module.css';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch();

    const toggleTodo = (id) => dispatch(toggleTodoComplete({id}));

    const deleteTodo = (id) =>{ dispatch(removeTodo({id}));};

    return (
        <ul className={styles.todo__list}>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList