import { createSlice } from '@reduxjs/toolkit';
import { addTask, fetchTasks, deleteTask, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = true;
  state.isLoading = false;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.error = null;
    },
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
      state.error = null;
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const tasksReducer = tasksSlice.reducer;
