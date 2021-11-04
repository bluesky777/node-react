import { PAGE_TYPES } from "../actions/PageTypes";

let sidebarShowInitial = "responsive";

const initialState = {
  sidebarShow: sidebarShowInitial,
};

export const PageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_TYPES.SHOW_SIDEBAR:
      localStorage.setItem("sidebarShow", action.sidebarShow);
      state = {
        ...state,
        sidebarShow: action.sidebarShow,
      };
      break;

    default:
      break;
  }
  return state;
};
