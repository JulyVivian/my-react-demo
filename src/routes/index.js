import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/error-page';
import Home from '../components/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/list',
        element: <h2>清单详情</h2>
      }, {
        path: '/intro',
        element: <h2>介绍详情</h2>
      }
    ]
  },
  {
    path: '/about',
    element: <h2>About</h2>,
    errorElement: <ErrorPage />
  }
])