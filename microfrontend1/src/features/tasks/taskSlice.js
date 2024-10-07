import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

const api_url = 'http://localhost:8000/tasks';

// Thunks for async operations
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(api_url);
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (newTask) => {
  const response = await axios.post(api_url, newTask);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (updatedTask) => {
  const response = await axios.put(`${api_url}/${updatedTask.id}`, updatedTask);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await axios.delete(`${api_url}/${taskId}`);
  return taskId;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        state.tasks[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;