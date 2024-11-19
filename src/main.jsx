import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//! Styles Imports
import "./Styles/responsiveness.css";
import "./Styles/fonts.css";
import "./Styles/index.css";
//--------------------------------------

//! Pages Imports
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
//-------------------------------------------

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
