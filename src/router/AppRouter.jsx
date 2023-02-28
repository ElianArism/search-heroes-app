import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";

import { AppRoutes } from "../app/routes/AppRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </>
  );
};
