import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../paGes/Roots/Root';
import ErrorPage from '../paGes/ErrorPage';
import Hero from '../CompoNents/Hero';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Hero
        }
    ]
  },
]);