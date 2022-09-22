import ReactDOM from 'react-dom/client';
import { useEffect,useState } from 'react';
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";


import Layout from './Layout';
import Aboutus from './Aboutus';
import Edit from './Edit';
import './index.css';
import GetAllStudents from './GetAllStudents';
import Home from './Home';
import Addstudent from './Addstudent';
import Detailpage from './Detailpage';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/students" element={<GetAllStudents />}/>
        <Route path="/students/:id" element={<Detailpage />} />
        <Route path="/students/Editstudent/:id" element={<Edit />}/>
        <Route path='/students/Addstudent' element={<Addstudent/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
 </>
);


