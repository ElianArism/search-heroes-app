import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AuthRoutes } from "../../src/router/AuthRoutes";

describe("Tests in <AuthRoutes />", () => {
  test("It must show the children if the user is not authenticated", () => {
    const contextValue = {
      state: {
        logged: false,
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AuthRoutes>
          <h1>Public route</h1>
        </AuthRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Public route")).toBeTruthy();
    screen.debug();
  });

  test("It must navigate if the user is logged", () => {
    const contextValue = {
      state: {
        logged: true,
        user: {
          name: "Ezequiel",
          id: Date.now(),
        },
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <AuthRoutes>
                  <>
                    <p>Login</p>
                  </>
                </AuthRoutes>
              }
            ></Route>
            <Route
              path="marvel"
              element={
                <>
                  <p>Marvel Page</p>
                </>
              }
            ></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Marvel Page")).toBeTruthy();
  });
});
