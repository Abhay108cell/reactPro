import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import React from 'react'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Dashboard/>
    </div>
  )
}

export default App
