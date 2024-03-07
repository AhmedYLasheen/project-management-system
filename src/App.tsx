import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MasterLayout from './ShareModule/Components/MasterLayout/MasterLayout';
import NotFound from './ShareModule/Components/NotFound/NotFound';
import Dashboard from './DshboardModule/Components/Dashboard/Dashboard';
import Login from './AuthModule/Components/Login/Login';
import ForgotPassword from './AuthModule/Components/ForgotPassword/ForgotPassword';
import ResetPassword from './AuthModule/Components/ResetPassword/ResetPassword';
import Register from './AuthModule/Components/Register/Register';
import VerifyAccount from './AuthModule/Components/VerifyAccount/VerifyAccount';
import UsersList from './UserModule/Components/UsersList/UsersList';
import ProjectList from './ProjectModule/Components/ProjectList/ProjectList';
import TasksList from './TaskModule/Components/TasksList/TasksList';
import AuthLayout from './ShareModule/Components/AuthLayout/AuthLayout';



function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element:  <AuthLayout/>,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login  /> },
        { path: 'login', element: <Login  /> },
        { path: 'forgot-Pass', element: <ForgotPassword /> },
        { path: 'reset-Pass', element: <ResetPassword/> },
        { path: 'register', element: <Register/> },
        { path: 'verifyAccount', element: <VerifyAccount /> },
      ],
    },
    {
      path: 'dashboard',
      element: (
        
          <MasterLayout />
       
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'projects', element: <ProjectList /> },
        { path: 'users', element: <UsersList /> },
        { path: 'tasks', element: <TasksList /> },

        
        
        
      ],
    },
  ]);

  return (
    <>
     < RouterProvider router={routes} /> 
    </>
  )
}

export default App
