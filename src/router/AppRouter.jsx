import { Navigate, Route, Routes } from "react-router-dom";

import { DCPage, MarvelPage } from "../app";
import { LoginPage } from "../auth";

import { Navbar } from "../shared/components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
