import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../paGes/Roots/Root';
import ErrorPage from '../paGes/ErrorPage';
import Hero from '../CompoNents/Hero';
import About from '../CompoNents/About';
import BookDetails from '../paGes/BookDetails';
import ReadList from '../paGes/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader:() => fetch('booksData.json'),
            path: "/",
            Component: Hero
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'bookDetails/:id',
          loader: () => fetch('booksData.json'),
          Component: BookDetails
        },
        {
          path: '/readList',
          loader: () => fetch('booksData.json'),
          Component:  ReadList
        }
    ]
  },
]);