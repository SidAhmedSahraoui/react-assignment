import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from '../types';

const initialState: TodoState = {
  todos: localStorage.getItem('todos')?.split(',') || [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // set todos
    setTodos: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem('todos', action.payload.join(','));
    },
    // add todo
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', state.todos.join(','));
    },
    // remove todo with index
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      localStorage.setItem('todos', state.todos.join(','));
    },
    // edit todo with index
    editTodo: (state, action) => {
      state.todos[action.payload.index] = action.payload.todo;
      localStorage.setItem('todos', state.todos.join(','));
    },
  },
});

export const { setTodos, addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
