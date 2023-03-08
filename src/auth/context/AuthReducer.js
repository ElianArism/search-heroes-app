import { ACTIONS } from "../actions/actions";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.login:
      return {
        logged: true,
        user: action.payload,
      };

    case ACTIONS.logout:
      return {
        logged: false,
        user: null,
      };

    case ACTIONS.default:
      return { ...state };

    default:
      throw new Error("Action not supported");
  }
};
