import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { Navigate } from 'react-router-dom';
import Home from '../pages/home/Home.tsx';

const Router = () => [
  {
    path: '/',
    element: <Navigate to="/home" />, // Chuyển hướng từ root đến /log-in
  },
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [{ path: 'home', element: <Home /> }],
  },
];
export default Router;
