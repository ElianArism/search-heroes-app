import { ACTIONS } from "../actions/actions";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.login:
      return {
        logged: true,
        name: action.payload,
      };
    case ACTIONS.logout:
      return {
        logged: false,
      };
    default:
      throw new Error("Action not supported");
  }
};
