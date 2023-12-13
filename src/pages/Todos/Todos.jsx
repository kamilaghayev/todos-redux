import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import TodoForm from '../../components/Todos/TodoForm';
import TodoList from '../../components/Todos/TodoList';
const Todos = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const addTask = () => dispatch(addTodo({text})) 

    const toggleComplete = (id) => {
        /* setTodos(
            todos.map(todo => {
                if (todo.id !== id) return todo;
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        ) */
    };

    const deleteTodo = (id) => {
        /* setTodos(
            todos.filter(todo => todo.id !== id)
        ) */
    };
    return (
        <>
            <TodoForm 
                setText={setText}
                handleSubmit={addTask}
            />
            <TodoList />
        </>
    )
}

export default Todos