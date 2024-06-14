import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Root from './Root/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>,
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
