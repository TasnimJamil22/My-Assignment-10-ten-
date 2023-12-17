import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Professionals from './Pages/Professionals/Professionals';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Services/Services';
import Cart from './Pages/Cart/Cart';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
 

function App() {
  return (
    <div className="App mx-auto">
      <Header></Header>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/cart' element={
          <RequireAuth>
            <Cart></Cart>
          </RequireAuth>
        }
        ></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/serviceDetails/:id' element={ <RequireAuth><ServiceDetails></ServiceDetails></RequireAuth> }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/professionals' element={<Professionals></Professionals>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
