import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ErrorPage from './pages/ErrorPge';

import MesecDanaPages from './pages/MesecDanaPages';
import SestMeseciPages from './pages/SestMeseciPages';

const router = createBrowserRouter([
  // maiRouter
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<IndexPage/>
      },
      {
        path: '/mesec_dana_paket',
        element:<MesecDanaPages/>
      },
      {
        path: '/sest_meseci_paket',
        element:<SestMeseciPages/>
      },
      {
        path: '/godinu_dana_paket',
        element:<SestMeseciPages/>
      }
    ],
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


