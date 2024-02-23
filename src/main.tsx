import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.tsx';
import NotFound from './pages/404.tsx';
import Card from './pages/Card.tsx';

// -- Router
const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/cards",
    element: <Card />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
