import { createSlice, nanoid, current } from "@reduxjs/toolkit";
// import { useState } from "react";

const initialState = {
  // todos:[{id:1,task:"hello world"||JSON.parse(localStorage.getItem('task'))}]
  todos: JSON.parse(localStorage.getItem("task")),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      const todo = {
        id: nanoid(),
        task: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("task", JSON.stringify(current(state.todos)));
      console.log(current(state.todos));
    },
    removeTask(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
