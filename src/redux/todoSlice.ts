import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

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
      toast.success('Todo added successfully');
    },
    // remove todo with index
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      localStorage.setItem('todos', state.todos.join(','));
      toast.success('Todo removed successfully');
    },
    // edit todo with index
    editTodo: (state, action) => {
      state.todos[action.payload.index] = action.payload.content;
      localStorage.setItem('todos', state.todos.join(','));
      toast.success('Todo edited successfully');
    },
  },
});

export const { setTodos, addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
