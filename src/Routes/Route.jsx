import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../components/Dashboard/Dashboard";
import NotFound from "../components/Errors/404/NotFound";
import LoginPage from "../components/Auth/Pages/LoginPage";

/* 
Why Use Future Flags?
Enabling these flags helps you transition smoothly to React Router v7 without surprises when upgrading.
You can test and adjust your code incrementally to avoid breaking changes.
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Dashboard />} />
        <Route path="patienten" element={<Dashboard />} />
        <Route path="cgmreport" element={<Dashboard />} />
        <Route path="support" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
