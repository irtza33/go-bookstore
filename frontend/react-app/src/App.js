import React , {Component}from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Landing from './Pages/Landing';

function App(){ 
  return ( 
    <BrowserRouter>
        <div>
          <Link to="/">
            Home
          </Link>
          </div>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
      </BrowserRouter>
)} 
export default App 
