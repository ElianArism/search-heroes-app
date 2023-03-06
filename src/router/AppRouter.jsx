import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../app/routes/AppRoutes";
import { LoginPage } from "../auth";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route
          path="login"
          element={
            <AuthRoutes>
              <LoginPage />
            </AuthRoutes>
          }
        />

        {/* Private routes */}
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <AppRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
