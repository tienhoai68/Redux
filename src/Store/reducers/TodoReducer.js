import { ADD_TO_DO } from "../types/addToDo";

const DEFAULT_STATE = {
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
  ]
}

export const todoReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_DO: {
      state.todoList = [...state.todoList, action.payload];
      break;
    };
  }
  return { ...state };
}
