import logo from './logo.svg';
import './App.css';
import React from 'react';
 
import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider';
 
 

function App() {
  return (
    <div className="mx-auto">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
