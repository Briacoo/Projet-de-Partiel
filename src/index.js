import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePages from './pages/HomePages';
import Parkings from './components/ParkingsPage';
import Parking from './components/ParkingPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePages />
      },
      {
        path: '/parkings',
        children: [
          {
            path: '',
            element: <Parkings />
          },
          {
            path: ':id',
            element: <Parking />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
