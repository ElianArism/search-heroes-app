import { ACTIONS } from "../../../src/auth/actions/actions";
import { AuthReducer } from "../../../src/auth/context/AuthReducer";

describe("Tests in auth reducer", () => {
  test("It must return the default state", () => {
    const state = AuthReducer(
      { logged: false },
      { type: ACTIONS.default }
    );
    expect(state).toEqual({ logged: false });
  });

  test("It must call the login action and set the user", () => {
    const action = {
      type: ACTIONS.login,
      payload: {
        name: "Elian",
        id: Date.now(),
      },
    };

    const state = AuthReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("It must call the logout and remove the user", () => {
    const action = {
      type: ACTIONS.logout,
    };
    const state = AuthReducer(
      {
        logged: true,
        user: {
          name: "Elian",
          id: Date.now(),
        },
      },
      action
    );
    expect(state).toEqual({ logged: false, user: null });
  });
});
