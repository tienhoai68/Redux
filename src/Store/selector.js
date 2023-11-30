import { createSelector } from "reselect"
export const todoListSelector = (state) => state.todoReducer.todoList;
export const searchTextSelector = (state) => state.filterReducer.search;
export const searchStatusSelector = (state) => state.filterReducer.status;
export const filterPriority = (state) => state.filterReducer.priority;

export const todosRemainingSelector = createSelector(todoListSelector, searchStatusSelector, searchTextSelector, filterPriority, (todoList, status, filterSearch, priority) => {
  return todoList.filter((todo) => {
    if (status == "All") {
      return priority.length ? todo.name.includes(filterSearch) && priority.includes(todo.priority) : todo.name.includes(filterSearch);;
    }
    return (
      todo.name.includes(filterSearch) && (status == "Completed" ? todo.completed : !todo.completed) && (priority.length ? priority.includes(todo.priority) : true)
    )
  })
})

// export const todoListSelector = (state) => {
//   const todosRemaining = state.reducer.todoList.filter((todo) => {
//     return todo.name.includes(state.reducer.filters.search);
//   });
//   return todosRemaining;
// }
