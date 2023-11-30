import { ADD_TO_DO } from "../types/addToDo"
import { FILTER_CHANGE_STATUS, FILTER_PRIORITY, FILTER_SEARCH_TEXT } from "../types/filter"

export const addToDoList = (data) => {
  return {
    type: ADD_TO_DO,
    payload: data,
  }
}

export const filterSearchText = (data) => {
  return {
    type: FILTER_SEARCH_TEXT,
    payload: data,
  }
}

export const statusFilterChange = (status) => {
  return {
    type: FILTER_CHANGE_STATUS,
    payload: status,
  }
}
export const filterPriotityActions = (data) => {
  return {
    type: FILTER_PRIORITY,
    payload: data,
  }
}
