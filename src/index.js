import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ErrorPage from './pages/ErrorPge';

import MesecDanaPages from './pages/MesecDanaPages';
import SestMeseciPages from './pages/SestMeseciPages';
import { Provider } from 'react-redux';
import store from './store/store';
import PayPages from './pages/PayPages';
import DvanaestmeseciPages from './pages/DvanaestmeseciPages';
import RegisterPages from './pages/RegisterPages';

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
        path:'/pocetna',
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
        element:<DvanaestmeseciPages/>
      },
      {
        path:'/paypackage',
        element:<PayPages/>
      },
      {
        path:'/register',
        element:<RegisterPages/>
      }
    ],
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
   
  </React.StrictMode>
);


