import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Support from './pages/Support/Support';
import TransactionPage from './pages/Transaction/Transaction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transaction",
    element: <TransactionPage/>,
  },
  {
    path: "/support",
    element: <Support/>,
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
