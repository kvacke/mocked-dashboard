import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./Pages/Home";
import Schemas from "./Pages/Schemas";
import Settings from "./Pages/Settings";
import MockSchema from "./Pages/MockSchema";
import Teams from "./Pages/Teams";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to={"home"} />,
      },
      {
        index: true,
        path: "home",
        element: <App />,
      },
      {
        path: "schemas",
        element: <Schemas />,
      },
      {
        path: "schemas/:schemaId",
        element: <MockSchema />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <Navigate to={"home"} />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
