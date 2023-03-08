import { ACTIONS } from "../../../src/auth/actions/actions";

describe("Test in Actions", () => {
  test("It must return these types", () => {
    expect(ACTIONS).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      default: "[Auth] Default State",
    });
  });
});
