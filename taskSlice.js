import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
      completed: false,
    },
    {
      id: 2,
      title: "Practice React",
      completed: true,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
} = taskSlice.actions;

export default taskSlice.reducer;