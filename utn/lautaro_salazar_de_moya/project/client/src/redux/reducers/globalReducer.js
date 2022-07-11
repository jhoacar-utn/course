import { CHANGE_LOGGED_IN, SESSION_STATE } from "../constants/globalConstants";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SESSION_STATE:
      return {
        ...state,
        userData: action.payload
      }
    default:
      return state;
  }
};
