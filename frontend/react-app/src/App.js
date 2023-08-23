import React , {Component}from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Landing from './Pages/Landing';

function App(){ 
  return ( 
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/landing" element={<Landing />}></Route>
            <Route path="/showall" element={<Landing />}></Route>
            <Route path="/add" element={<Landing />}></Route>
            <Route path="/showbyid" element={<Landing />}></Route>
            <Route path="/delete" element={<Landing />}></Route>
          </Routes>
      </BrowserRouter>
)} 
export default App 
