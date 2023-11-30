import { FILTER_CHANGE_STATUS, FILTER_PRIORITY, FILTER_SEARCH_TEXT } from "../types/filter";


const DEFAULT_STATE = {
  search: "",
  status: "ALL",
  priority: [],
}

export const filterReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FILTER_SEARCH_TEXT: {
      return {
        ...state,
        search: action.payload,
      }
    };
    case FILTER_CHANGE_STATUS: {
      return {
        ...state,
        status: action.payload,
      }
    };
    case FILTER_PRIORITY: {
      return {
        ...state,
        priority: action.payload,
      }
    };
  }
  return { ...state };
}
