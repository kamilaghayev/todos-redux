import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action){
            if (!action.payload.text.trim().length) return;
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            });
            action.payload.text = ''
        },
        toggleTodoComplete(state, action){
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);

            toggleTodo.completed = !toggleTodo.completed;
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
    }
})

export const { addTodo, toggleTodoComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;