import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/home/Home';
import CustomCursor from './CustomCursor/CustomCursor';
import About from './pages/About/About';
import ProjectsPage from './pages/Projects/ProjectsPage';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/a-sendyinieke',
        element: <About />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CustomCursor />
    <RouterProvider router={router} />
  </>,
);
