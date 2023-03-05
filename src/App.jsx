import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from './components/Nav';
import HomePage from "./pages/HomePage/HomePage";
import CreateProjectPage from "./pages/CreateProjectPage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/create-project/',
        element: <CreateProjectPage />
      },
      {
        path: '/project/:id',
        element: <ProjectPage />,
      },
      {
        path: '/login/',
        element: <LoginPage />
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
//test